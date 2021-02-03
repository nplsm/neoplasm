<script lang="ts">
  export let featuring = [];
</script>

{#if featuring.length > 0}feat. {#each featuring as artist, i}{artist.alias}{#if i !== featuring.length - 1},{/if}{/each}{/if}
