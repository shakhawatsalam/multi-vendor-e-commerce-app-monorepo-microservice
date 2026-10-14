import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "Auth Service API",
    description: "Automatically generated Swagger docs",
    version: "1.0.0",
  },
  host: "localhose:6001",
  schemas: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointesFile = ["./routes/auth.router.ts"];

swaggerAutogen()(outputFile, endpointesFile, doc);
