import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/gppl_website/' : '/',
    server: {
        allowedHosts: true
    }
}))
