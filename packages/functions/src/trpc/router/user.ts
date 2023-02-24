import { z } from "zod";
import { publicProcedur, router } from "../utils";

export const userRouter = router({
  hello: publicProcedur
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello there ${input.name}`;
    }),
});
