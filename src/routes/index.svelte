<script lang="ts" context="module">
    const inspirationLinks = [
        {
            link: 'https://lenadesign.org/2021/11/15/css-christmas-tree-animation',
            description: 'Tree & animation by Lena Stanley',
        },
        {
            link: 'https://w3bits.com/css-snowfall',
            description: 'Snowfall animation by Rahul Arora',
        },
        {
            link: 'https://www.scottbuckley.com.au',
            description: 'Music by Scott Buckley',
        },
        {
            link: 'https://github.com/Greenheart/christmas-tree',
            description: 'Mashup by Samuel Plumppu',
        },
    ]
</script>

<script lang="ts">
    import Div100vh from '../components/Div100vh.svelte'
    import ChristmasTree from '../components/ChristmasTree.svelte'
    import Snowfall from '../components/Snowfall.svelte'
    import { paused, playlist, skip, currentIndex } from '$lib/player'

    import '../global.css'

    let credits = false
</script>

<Div100vh class="w-full min-h-screen h-screen bg-[#13323d]">
    <Snowfall />
    <div class="w-full h-full items-center flex flex-col justify-between z-10">
        <div class="text-center text-white mt-8 z-20 text-lg md:text-2xl">
            <h1 class="font-bold">The Most Sustainable Christmas Tree</h1>
            <p class="text-gray-400 text-lg md:text-xl">
                Thank you for choosing this tree and saving a real one!
            </p>
        </div>
        <div>
            <ChristmasTree />
        </div>

        <div class="w-full text-center p-4 z-20">
            <div
                class="flex space-x-4 items-center justify-center mb-24 md:text-lg"
            >
                {#if $paused}
                    <p class="text-white">
                        Decorate the tree by clicking it 🎅
                    </p>
                {:else}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8 cursor-pointer hover:text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        on:click={() => skip('next')}
                    >
                        <path
                            d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                        />
                    </svg>
                    <a
                        href={$playlist[$currentIndex].link}
                        target="_blank"
                        class="text-blue-500 hover:underline"
                        >{$playlist[$currentIndex].name}</a
                    >
                {/if}
            </div>
            <div>
                <button
                    class="tracking-wider text-white cursor-pointer border border-white px-6 py-2 flex mx-auto items-center justify-center hover:bg-white hover:text-[#f34653] text-lg md:text-xl"
                    on:click={() => {
                        credits = !credits
                    }}
                >
                    Credits
                </button>
                {#if credits}
                    <div class="md:text-lg flex flex-col mt-3">
                        {#each inspirationLinks as { link, description } (link)}
                            <a
                                href={link}
                                class="text-blue-500 hover:underline"
                                target="_blank"
                            >
                                {description}
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</Div100vh>
