import { baseProcedure, router } from "..";
import { z } from "zod";

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: "1",
    name: "KATT",
  },
];

export const userRouter = router({
  hi: baseProcedure
    // The input is unknown at this time.
    // A client could have sent us anything
    // so we won't assume a certain data type.
    .input(z.string().min(1))
    .query(({ input, ctx }) => {
      return { message: `Hi, ${input}` };
    }),
});
