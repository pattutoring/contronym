import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// change ONLY this line if your repo name is different
const repoName = "contronym";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
