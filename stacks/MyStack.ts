import { StackContext, Api, AstroSite, Auth } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
      "POST /trpc/{proxy+}": "packages/functions/src/trpc/lambda.handler",
    },
    cors: true,
  });

  const auth = new Auth(stack, "auth", {
    authenticator: {
      handler: "functions/auth.handler",
    },
  });
  auth.attach(stack, {
    api,
    prefix: "/auth",
  });

  const astro = new AstroSite(stack, "Site", {
    path: "packages/frontend",
    environment: {
      PUBLIC_API_URL: `${api.url}`,
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    AstroURL: astro.url || "localhost",
  });
}
