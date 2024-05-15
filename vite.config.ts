import "dotenv/config"
import { defineConfig } from "vite"
import type { CommonServerOptions } from "vite"
import { sveltekit } from "@sveltejs/kit/vite"
import { enhancedImages } from "@sveltejs/enhanced-img"
import mkcert from "vite-plugin-mkcert"

const serverConfig: CommonServerOptions = {
    https: true,
    host: process.env.HOST ?? "localhost",
    port: Number(process.env.PORT) ?? 3000,
    strictPort: true,
    proxy: {},
}

export default defineConfig({
    server: serverConfig,
    preview: serverConfig,
    plugins: [sveltekit(), enhancedImages(), mkcert()],
})
