import { router, publicProcedure } from "../root";
import { z } from "zod";

export const postRouter = router({
  random: publicProcedure
    .input(z.object({ num: z.number() }))
    .mutation(({ input }) => {
      return Math.floor(Math.random() * 100) / input.num;
    }),
});
