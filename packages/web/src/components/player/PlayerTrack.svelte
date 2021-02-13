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
    font-weight: 200;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
    /* display: table-row; */
  }

  /* li.playing::marker {
    content: url(/play.svg);
    display: inline-block;
  } */

  li.current {
    font-family: HelveticaNeue, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
    font-style: italic;
    /* margin: calc(1em + 10px) 0 calc(1em + 10px) 0; */
    /* transition: margin .1s ease-in-out; */
  }
</style>
