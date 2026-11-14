// Yash configuration for TanStack Start, React 19, Tailwind CSS v4, and Nitro SSR
import { defineConfig } from "yash-vite-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (SSR error wrapper).
    server: { entry: "server" },
  },
});
