import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig(() => {
    return {
        base: '/',
        resolve: {
            alias: {
                src: "/src",
            },
        },
        server: {
            port: 3000,
            open: true,
        },
        build: {
            outDir: 'build',
        },
        plugins: [react()],
        css: {
            postcss: {
                plugins: [tailwindcss()],
            },
        },
    };
});