import { AuthHandler, GoogleAdapter } from "sst/node/auth";

const GOOGLE_CLIENT_ID =
  "247589743331-8d7ur840lvkik51uqqelq3ulovbkn47l.apps.googleusercontent.com";

export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      mode: "oidc",
      clientID: GOOGLE_CLIENT_ID,
      onSuccess: async (tokenset: any) => {
        return {
          statusCode: 200,
          body: JSON.stringify(tokenset.claims(), null, 4),
        };
      },
    }),
  },
});
