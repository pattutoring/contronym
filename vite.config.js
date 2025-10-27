import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ CHANGE THIS to match your GitHub repo name:
const repoName = "contronym";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // ensures correct asset paths for GitHub Pages
});


