import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({ postcss: true }),
    kit: {
        target: '#svelte',
        adapter: adapter(),
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
