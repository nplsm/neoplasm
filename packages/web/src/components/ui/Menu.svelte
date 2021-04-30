<script lang="ts">
  import { createEventDispatcher } from "svelte"

  import ArtistString from "../player/ArtistString.svelte"
  import TrackString from "../player/TrackString.svelte"
  import PlayerProgressBar from "../player/PlayerProgressBar.svelte"
  import PlayerControls from "../player/PlayerControls.svelte"

  export let currentTrack
  export let currentTime
  export let duration
  export let paused
  export let cover
  export let title

  let progressStart = 0
  $: progressEnd = currentTime / duration

  let showMenu = false

  $: showProgress = progressEnd ? true : false

  const progressThickness = 5
  const progressRadius = 50 - progressThickness / 2
  $: progressLenght = progressEnd - progressStart
  $: strokeDasharayLength = 2 * Math.PI * progressRadius * progressLenght
  $: strokeDasharayGap = 2 * Math.PI * progressRadius * (1 - progressLenght)
  const offset = 0.25
  const strokeDashOffset =
    2 * Math.PI * progressRadius * (offset - progressStart)

  $: showHamburger = !showMenu

  const hamburgerWidth = 40
  const hamburgerHeight = 0.8 * hamburgerWidth
  const hamburgerThickness = 0.15 * hamburgerWidth
  const hamburgerHalfThickness = hamburgerThickness / 2
  const hamburgerHorizontalGap = (100 - hamburgerWidth) / 2
  const hamburgerVerticalGap = (100 - hamburgerHeight) / 2
  const hamburgerLength = hamburgerWidth - hamburgerThickness

  $: showCross = showMenu

  const crossWidth = Math.max(hamburgerWidth, hamburgerHeight)
  const crossGap = (100 - crossWidth) / 2

  const dispatch = createEventDispatcher()

  function handleSeeking(event) {
    const newTime = event.detail.newTime
    dispatch("seeking", { newTime })
  }
  function handleSeek(event) {
    const newTime = event.detail.newTime
    dispatch("seek", { newTime })
  }
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

{#if showMenu}
  <div class="menu">
    <div class="controls">
      <img src={cover} alt={title} />

      <p><TrackString {...currentTrack} /></p>
      <p><ArtistString {...currentTrack} /></p>

      <PlayerProgressBar
        {currentTime}
        {duration}
        on:input={handleSeeking}
        on:change={handleSeek}
      />

      <PlayerControls
        {paused}
        on:playPause={handlePlayPause}
        on:prev={handlePrev}
        on:next={handleNext}
      />
    </div>
  </div>
{/if}

<svg
  on:click={() => {
    showMenu = !showMenu
  }}
  viewBox="0 0 100 100"
>
  <circle class="background" cx={50} cy={50} r={50} />
  {#if showHamburger}
    <path
      class="hamburger"
      stroke-width={hamburgerThickness}
      d="
        M {hamburgerHorizontalGap +
        hamburgerHalfThickness} {hamburgerVerticalGap +
        hamburgerHalfThickness}
        h {hamburgerLength}
        M {hamburgerHorizontalGap +
        hamburgerHalfThickness}  50
        h {hamburgerLength}
        M {hamburgerHorizontalGap +
        hamburgerHalfThickness}  {100 -
        (hamburgerVerticalGap +
          hamburgerHalfThickness)}
        h {hamburgerLength}
      "
    />
  {/if}
  {#if showCross}
    <path
      class="cross"
      stroke-width={hamburgerThickness}
      d="
        M {crossGap + hamburgerHalfThickness} {crossGap +
        hamburgerHalfThickness}
        l {crossWidth -
        hamburgerThickness} {crossWidth -
        hamburgerThickness}
        M {crossGap + hamburgerHalfThickness} {100 -
        (crossGap + hamburgerHalfThickness)}
        l {crossWidth -
        hamburgerThickness} {hamburgerThickness -
        crossWidth} 
              
    "
    />
  {/if}
  {#if showProgress}
    <circle
      class="progress"
      stroke-width={progressThickness}
      stroke-dasharray="{strokeDasharayLength}, {strokeDasharayGap}"
      stroke-dashoffset={strokeDashOffset}
      cx={50}
      cy={50}
      r={progressRadius}
    />
  {/if}
</svg>

<style>
  p {
    text-align: center;
  }
  img {
    width: 100%;
    /* max-width: 60rem; */
    padding: 0;
    /* margin-top: 1rem; */
    margin: 0 auto 2rem auto;
    display: block;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .menu {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: white;
    overflow-x: hidden;
    transition: 5ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
  }

  .controls {
    position: relative;
    width: 90%;
    max-width: 30rem;
  }

  svg {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    /* box-shadow: 0 2px 2px lightgray; */
    transition: all 0.5ms;
    z-index: 2;
  }

  svg:hover,
  svg:focus {
    bottom: 24px;
    right: 24px;
    width: 52px;
    height: 52px;
    /* box-shadow: 0 3px 3px lightgray; */
    cursor: pointer;
  }

  svg:active {
    bottom: 26px;
    right: 26px;
    width: 48px;
    height: 48px;
    /* box-shadow: 0 0 0; */
  }

  .background {
    fill: rgba(0, 0, 0, 0.54);
  }

  .hamburger,
  .cross {
    stroke: white;
    stroke-linecap: round;
  }

  .progress {
    fill: transparent;
    stroke: #001aff;
    stroke-linecap: round;
  }

  /* div {
    position: fixed;
    right: 50px;
    bottom: 50px;
    background-color: black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
  }

  svg.hamburger {
    position: absolute;
    width: 40%;
    height: 40%;
    left: 30%;
    top: 30%;
    margin: 0;
    padding: 0;
  }

  circle {
    fill: transparent;
    stroke-linecap: round;
  }

  .progress {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    margin: 0;
    padding: 0;
  } */
</style>
