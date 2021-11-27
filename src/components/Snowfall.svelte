<script lang="ts">
    import { onMount } from 'svelte'
    import '../snowfall.css'

    let snowflakes = []

    onMount(() => {
        const w = window.innerWidth
        const num = w > 700 ? 100 : w > 500 ? 80 : 50

        snowflakes = [...Array(num).keys()]
    })
</script>

<div class="snowfall">
    {#each snowflakes as i (i)}
        <div class="snowflake" />
    {/each}
</div>
