const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qtashUrl: process.env.QTASH_REDIS_URL!,
      qtashToken: process.env.QSTASH_REDIS_TOKEN!,
    },
    emailjs: {
      sendUrl: process.env.EMAILJS_SEND_URL!,
      serviceId: process.env.EMAILJS_SERVICE_ID!,
      publicKey: process.env.EMAILJS_PUBLIC_KEY!,
      privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      templateId: process.env.EMAILJS_TEMPLATE_ID!,
    },
  },
};
export default config;
