import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "semantic-ui-css/semantic.min.css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
