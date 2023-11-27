import { defineConfig } from "vite";
import { params } from "@ampt/sdk";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [react(), federation({
    name: 'remote-app',
    filename: 'remoteEntry.js',
    // Modules to expose
    exposes: {
        './Button': './src/Button.tsx',
    },
})],
  server: {
    open: true,
    port: process.env.PORT ? parseInt(process.env.PORT) : 3001,
    strictPort: true,
    // This proxies all outgoing requests from the app to your live Ampt environment
    proxy: {
      "/api": {
        target: params("AMPT_URL"),
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "static",
    reportCompressedSize: true,
    rollupOptions: {
      maxParallelFileOps: 10,
    },
  },
});

