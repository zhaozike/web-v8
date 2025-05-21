import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { verifySignature } from "@/libs/creem";

// This is where we receive Creem webhook events
// It's used to update user data, send emails, etc...
export async function POST(req: NextRequest) {
  try {
    await connectMongo();

    const body = await req.json();    
    // Get the signature from the headers
    const signature = headers().get("creem-signature");
    
    console.log('creem webhook:', body, signature);
    // Validate the event with the signature (if provided)
    if (signature) {
      const isValid = verifySignature(body, signature);
      if (!isValid) {
        console.error("Invalid Creem signature");
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
      }
    }

    const eventType = body.eventType;
    
    // Handle different event types
    switch (eventType) {
      case "checkout.completed": {
        // Payment was successful
        // Update user data or grant access to your product
        const { metadata, product, customer } = body.object;
        
        let user;

        // Get or create the user. userId is normally passed in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (metadata?.userId) {
          user = await User.findById(metadata.userId);
        } else if (customer.email) {
          user = await User.findOne({ email: customer.email });

          if (!user) {
            user = await User.create({
              email: customer.email,
              name: customer.name,
            });

            await user.save();
          }
        } else {
          console.error("No user found");
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.priceId = product.id;
        user.customerId = customer.id;
        user.hasAccess = true;
        await user.save();
        break;
      }
      
      case "subscription.canceled": {
        // Subscription was canceled
        // Revoke access to your product
        const { customer } = body.object;
        
        if (customer.id) {
          const user = await User.findOne({ customerId: customer.id });
          
          if (user) {
            user.hasAccess = false;
            await user.save();
          }
        }
        
        break;
      }
      
      default:
        // Unhandled event type
        console.log(`Unhandled Creem event: ${eventType}`);
    }
    
    return NextResponse.json({});
  } catch (e) {
    console.error("Creem webhook error:", e.message);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
} 