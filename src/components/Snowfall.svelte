<script lang="ts" context="module">
    // IDEA: render number of trees proportionate to how large the screen is
    const snowflakes = [...Array(250).keys()]
</script>

<div class="snowfall">
    {#each snowflakes as i (i)}
        <div class="snowflake" />
    {/each}
</div>
