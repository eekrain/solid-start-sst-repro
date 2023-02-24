import { useState } from "react";
import "./App.css";
import { trpcMulti, trpcSimple } from "./utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

function Simple() {
  const res = trpcSimple.userById.useQuery("1");

  if (!res.data) return <div>Loading...</div>;

  return (
    <div
      style={{
        padding: "40px",
        marginBottom: "100px",
        backgroundColor: "#d9f99d",
      }}
    >
      <h1>Simple</h1>
      <pre>{JSON.stringify(res.data, null, 2)}</pre>
    </div>
  );
}

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
  const [queryClientSimple] = useState(() => new QueryClient());
  const [trpcClientSimple] = useState(() =>
    trpcSimple.createClient({
      links: [
        httpBatchLink({
          url:
            `${import.meta.env.VITE_APP_API_URL}/simple` ||
            "http://localhost:3000/trpc",
        }),
      ],
    })
  );
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
      <trpcSimple.Provider
        client={trpcClientSimple}
        queryClient={queryClientSimple}
      >
        <QueryClientProvider client={queryClientSimple}>
          <Simple />
        </QueryClientProvider>
      </trpcSimple.Provider>

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
