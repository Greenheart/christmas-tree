<script lang="ts">
    import { onMount } from 'svelte'
    import '../snowfall.css'

    let snowflakes = []

    onMount(() => {
        const w = window.innerWidth
        const num = w > 700 ? 120 : w > 500 ? 100 : 60

        snowflakes = [...Array(num).keys()]
    })
</script>

<div class="snowfall">
    {#each snowflakes as i (i)}
        <div class="snowflake" />
    {/each}
</div>
