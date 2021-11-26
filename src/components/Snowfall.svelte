<script lang="ts" context="module">
    const snowflakes = [...Array(250).keys()]
</script>

<div class="snowfall">
    {#each snowflakes as i (i)}
        <div class="snowflake" />
    {/each}
</div>
