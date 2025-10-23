import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows global test(), expect(), etc.
    environment: "happy-dom", // simulates the browser environment
    setupFiles: "./src/setupTests.js", // setup file for jest-dom
  },
});
