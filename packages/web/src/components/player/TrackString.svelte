<script lang="ts">
  import ArtistString from "./ArtistString.svelte"
  import FeatString from "./FeatString.svelte"

  export let artists = []
  export let title = ""
  export let featuring = []
  export let showArtists = false
</script>

{#if showArtists}
  <ArtistString {artists} /> —
{/if}
{title}
<FeatString {featuring} />
