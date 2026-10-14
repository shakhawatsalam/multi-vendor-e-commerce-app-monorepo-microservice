import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379,
  // password: process.env.REDIS_PASSWORD,
});

redis.on("ready", () => {
  console.info("Redis connected and ready 🚀🚀🚀🚀🚀");
});

redis.on("error", (error: Error) => {
  console.error("Redis connection error:", error.message);
});

export default redis;
