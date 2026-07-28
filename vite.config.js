import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        target: "esnext",
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
                    "vendor-motion": ["framer-motion"],
                    "vendor-react": ["react", "react-dom", "react-router-dom"],
                },
            },
        },
    },
});
