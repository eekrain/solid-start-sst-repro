import { z } from "zod";
import { publicProcedur, router } from "../utils";

export const utilRouter = router({
  genRandom: publicProcedur
    .input(z.object({ num: z.number() }))
    .query(({ input }) => {
      return Math.floor(Math.random() * 100) / input.num;
    }),
});
