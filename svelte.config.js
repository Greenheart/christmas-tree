import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

const dev = process.env.NODE_ENV === 'development'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({ postcss: true }),
    kit: {
        target: '#svelte',
        adapter: adapter(),
        paths: {
            base: dev ? '' : '/christmas-tree',
        },
        vite: {
            resolve: {
                alias: {
                    $components: resolve('./src/components'),
                },
            },
        },
    },
}

export default config
