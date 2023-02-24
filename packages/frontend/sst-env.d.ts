/// <reference path="../../.sst/types/index.ts" />

declare module "solid-start-sst" {
  type SAdapter = import("solid-start/vite").Adapter;

  const value: () => SAdapter | string;
  export default value;
}
