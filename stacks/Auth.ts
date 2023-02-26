import { StackContext, Auth as SSTAuth, use } from "sst/constructs";
import Api from "./Api";

const Auth = ({ stack }: StackContext) => {
  const api = use(Api);
  const auth = new SSTAuth(stack, "MyAuth", {
    authenticator: {
      handler: "packages/functions/src/auth.handler",
    },
  });
  auth.attach(stack, {
    api,
    prefix: "/auth",
  });
};

export default Auth;
