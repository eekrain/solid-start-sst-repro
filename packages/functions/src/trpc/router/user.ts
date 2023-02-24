import { router, publicProcedure } from "../root";
import { z } from "zod";

export const userRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello ${input.name}`;
    }),
});
