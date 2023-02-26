import { AstroSite, StackContext, use } from "sst/constructs";
import Api from "./Api";

const Web = ({ stack }: StackContext) => {
  const api = use(Api);
  const astro = new AstroSite(stack, "Site", {
    path: "packages/frontend",
    environment: {
      PUBLIC_API_URL: `${api.url}`,
    },
  });

  stack.addOutputs({
    AstroURL: astro.url || "localhost",
  });

  return astro;
};

export default Web;
