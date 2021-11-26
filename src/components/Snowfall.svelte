<script lang="ts">
    import { onMount } from 'svelte'

    let snowflakes = []

    onMount(() => {
        const w = window.innerWidth
        const num =
            w > 1200 ? 250 : w > 1000 ? 200 : w > 700 ? 150 : w > 500 ? 100 : 60
        console.log(w, num)

        snowflakes = [...Array(num).keys()]
    })
</script>

<div class="snowfall">
    {#each snowflakes as i (i)}
        <div class="snowflake" />
    {/each}
</div>
