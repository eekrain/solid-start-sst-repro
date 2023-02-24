import { useState } from "react";
import "./App.css";
import { trpcMulti } from "./utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

function Multi() {
  const res = trpcMulti.user.hello.useQuery({ name: "EKAAAA" });

  if (!res.data) return <div>Loading...</div>;

  return (
    <div
      style={{
        padding: "40px",
        marginBottom: "100px",
        backgroundColor: "#d9f99d",
      }}
    >
      <h1>Multi</h1>
      <pre>{JSON.stringify(res.data, null, 2)}</pre>
    </div>
  );
}

function App() {
  const [queryClientMulti] = useState(() => new QueryClient());
  const [trpcClientMulti] = useState(() =>
    trpcMulti.createClient({
      links: [
        httpBatchLink({
          url:
            `${import.meta.env.VITE_APP_API_URL}/trpc` ||
            "http://localhost:3000/trpc",
        }),
      ],
    })
  );
  return (
    <main>
      <trpcMulti.Provider
        client={trpcClientMulti}
        queryClient={queryClientMulti}
      >
        <QueryClientProvider client={queryClientMulti}>
          <Multi />
        </QueryClientProvider>
      </trpcMulti.Provider>
    </main>
  );
}

export default App;
