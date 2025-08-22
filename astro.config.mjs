import { defineConfig } from "astro/config";
import node from '@astrojs/node';

// https://astro.build/config
// server output allows for server side rendering, not static
export default defineConfig({
    output: 'server',
    adapter: node({ mode: 'standalone'}),
});