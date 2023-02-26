// @ts-ignore
import { SSTConfig } from "sst";
import Api from "./stacks/Api";
import Auth from "./stacks/Auth";
import DynamoDB from "./stacks/DynamoDB";
import Web from "./stacks/Web";

export default {
  config(_input) {
    return {
      name: "personal-branding",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    // Stack init order is important !
    app.stack(DynamoDB);
    app.stack(Api);
    app.stack(Auth);
    app.stack(Web);
  },
} as SSTConfig;
