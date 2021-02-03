<script lang="ts">
  import TrackString from "./TrackString.svelte"

  export let track
  export let current = false
  export let paused = true

  $: playing = current && !paused
</script>

<li class:playing class:current on:click>
  <p><TrackString {...track} /></p>
</li>

<style>
  li {
    height: 1.6rem;
    font-family: HelveticaNeue-Thin, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }

  /* li.playing::marker {
    content: url(/play.svg);
    display: inline-block;
  } */

  li.current {
    /* font-family: Helvetica, Helvetica, sans-serif; */
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
  }
</style>
