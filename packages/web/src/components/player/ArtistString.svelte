<script lang="ts">
  export let artists = [];
</script>

{#each artists as artist, i}{artist.alias}{#if i !== artists.length - 1},{/if}{/each}
