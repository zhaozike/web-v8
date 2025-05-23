module.exports = {
  apps: [
    {
      cwd: '/home/azureuser/wwwroot/website',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_test: {
        NODE_ENV: 'test',
        PORT: 3001
      },
      name: 'website',
      script: 'server.js'
    }
  ]
};
