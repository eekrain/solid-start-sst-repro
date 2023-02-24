import { router } from "../root";
import { userRouter } from "./user";
import { postRouter } from "./post";

export const multiRouter = router({
  user: userRouter,
  post: postRouter,
});

export type MultiRouter = typeof multiRouter;
