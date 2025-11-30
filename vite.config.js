import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/gppl_website/' : '/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
                newsletter: resolve(__dirname, 'newsletter.html'),
                product: resolve(__dirname, 'product.html'),
            },
        },
    },
    server: {
        allowedHosts: true
    }
}))
