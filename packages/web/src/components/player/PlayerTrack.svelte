<script lang="ts">
  import TrackString from "./TrackString.svelte"

  export let track
  export let current = false
  export let paused = true
  export let showArtists = false

  $: playing = current && !paused
</script>

<li class:playing class:current on:click>
  <p class:current><TrackString {...track} {showArtists} {current} /></p>
</li>

<style>
  li {
    min-height: 1.6rem;
    font-family: "Helvetica Neue";
    font-size: 0.8rem;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    /* display: table-row; */
  }

  /* li.playing::marker {
    content: url(/play.svg);
    display: inline-block;
  } */

  .current {
    /* font-family: "Helvetica Neue", Helvetica, sans-serif; */
    /* color: rgba(0, 0, 0, 0.8); */
    font-weight: bolder;
    /* font-style: italic; */
    /* margin: calc(1em + 10px) 0 calc(1em + 10px) 0; */
    /* transition: margin .1s ease-in-out; */
  }
</style>
