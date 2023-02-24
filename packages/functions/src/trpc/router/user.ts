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
  userById: baseProcedure
    // The input is unknown at this time.
    // A client could have sent us anything
    // so we won't assume a certain data type.
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query((req) => {
      const { input } = req;

      const user = userList.find((u) => u.id === input.id);

      return user;
    }),
});
