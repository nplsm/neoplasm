<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let paused = true

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

<div>
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

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: transparent;
    border: transparent;
    fill: rgba(0, 0, 0, 0.54);
  }

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.1rem 0.4rem 0.2rem 1rem;
    margin: 0rem;
    cursor: pointer;
  }

  svg.play-pause {
    height: 2.7rem;
    width: 2.7rem;
  }
</style>
