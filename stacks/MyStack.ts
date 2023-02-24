import { StackContext, Api, AstroSite } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });

  const site = new AstroSite(stack, "Site", {
    path: "packages/frontend",
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SiteURL: site.url || "localhost",
  });
}
