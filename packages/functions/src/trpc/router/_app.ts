import { router } from "../utils";
import { userRouter } from "./user";
import { utilRouter } from "./util";

export const multiRouter = router({
  user: userRouter,
  util: utilRouter,
});
