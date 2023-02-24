import { StackContext, Api, AstroSite, StaticSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      // "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/simple.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/simple.handler",
      // "GET /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
      // "POST /trpc/{proxy+}": "packages/functions/src/trpc/index.handler",
    },
    cors: true,
  });

  const site = new StaticSite(stack, "react", {
    path: "packages/static",
    buildOutput: "dist",
    buildCommand: "pnpm build",
    environment: {
      // Pass in the API endpoint to our app
      VITE_APP_API_URL: api.url,
    },
  });

  // const site = new AstroSite(stack, "Site", {
  //   path: "packages/frontend",
  //   environment: {
  //     PUBLIC_API_URL: api.url,
  //   },
  // });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url || "localhost",
  });
}
