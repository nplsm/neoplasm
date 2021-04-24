<script lang="ts">
  import { createEventDispatcher } from "svelte"
  import TrackString from "./TrackString.svelte"
  import ArtistString from "./ArtistString.svelte"
  import TimeString from "./TimeString.svelte"

  export let currentTrack
  export let paused
  export let currentTime = 0
  export let duration = 0

  $: showHours = duration >= 60 * 60

  const dispatch = createEventDispatcher()

  function handlePlayPause() {
    dispatch("playPause")
  }
  function handlePrev() {
    dispatch("prev")
  }
  function handleNext() {
    dispatch("next")
  }
</script>

<div class="container">
  <div class="controls">
    <button on:click={handlePrev}
      ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6H6V18H8V6ZM18 18L9.5 12L18 6V18Z" />
      </svg>
    </button>
    <button on:click={handlePlayPause}
      >{#if paused}
        <svg
          class="play-pause"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5V19L19 12L8 5Z" />
        </svg>
      {:else}
        <svg
          class="play-pause"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 19H6V5H10V19ZM14 19V5H18V19H14Z" />
        </svg>
      {/if}</button
    >
    <button on:click={handleNext}
      ><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 12L6 18V6L14.5 12ZM18 18H16V6H18V18Z" />
      </svg>
    </button>
  </div>
  <div class="track">
    <p><TrackString {...currentTrack} /></p>
    <p><ArtistString {...currentTrack} /></p>
  </div>
  <div class="time">
    <p>
      <TimeString time={currentTime} {showHours} />/<TimeString
        time={duration}
        {showHours}
      />
    </p>
  </div>
</div>

<style>
  div.container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    fill: rgb(29, 29, 29);
    background: rgb(168, 168, 168);
    border: transparent;
    height: 3.2rem;
    margin: 0;
    padding: 0 0 2.4rem;
    box-shadow: 0 8px 6px 6px black;
  }

  div.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    margin: 0 0.2rem;
    padding: 0;
  }

  div.track {
    margin: 0 auto 0 0;
    padding: 0 0.2rem;
  }

  div.time {
    margin: 0 0.6rem 0 0.2rem;
    padding: 0;
  }

  button {
    width: 2rem;
    height: 2rem;
    margin: 0 0.1rem;
    padding: 0;
    background: transparent;
    border: transparent;
  }

  svg {
    width: 100%;
    height: 100%;
  }
</style>
