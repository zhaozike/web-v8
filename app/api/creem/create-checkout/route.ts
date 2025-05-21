import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import { createCheckout } from "@/libs/creem";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

// This function is used to create a Creem Checkout Session
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.productId) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  } else if (!body.successUrl) {
    return NextResponse.json(
      { error: "Success URL is required" },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    const { productId, successUrl, requestId } = body;

    const creemCheckoutURL = await createCheckout({
      productId,
      successUrl,
      requestId: requestId || '', // Use requestId if provided, otherwise use user ID
      metadata: {
        userId: user?._id?.toString(),
      },
    });

    if (!creemCheckoutURL) {
      throw new Error("Failed to create Creem checkout session");
    }

    return NextResponse.json({ url: creemCheckoutURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
} 