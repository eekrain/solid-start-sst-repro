// @ts-ignore
import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "personal-branding",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app.stack(API);
  },
} as SSTConfig;
