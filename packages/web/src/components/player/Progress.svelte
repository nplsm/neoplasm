<script lang="ts">
  import { createEventDispatcher } from "svelte"

  export let currentTime = 0
  export let duration = 0

  let div: HTMLDivElement
  let width: number
  let seeking = false
  let newTime = 0

  $: time = seeking ? newTime : currentTime
  $: position = (time / duration) * 100
  $: rect = div?.getBoundingClientRect()
  $: left = rect?.left
  $: width = rect?.width

  const dispatch = createEventDispatcher()

  function handlePointerMove(event) {
    const pointerPositionX = event.pageX - left
    newTime = (pointerPositionX / width) * duration
    if (newTime > duration) {
      newTime = 0.99 * duration
    } else if (newTime < 0) {
      newTime = 0
    }
    if (seeking) {
      dispatch("input", { newTime })
    }
  }

  function handlePointerUp(event) {
    if (seeking) {
      dispatch("change", { newTime })
      seeking = false
    }
  }

  function handlePointerDown(event) {
    event.preventDefault()
    seeking = true
  }
</script>

<svelte:window
  on:pointermove={handlePointerMove}
  on:pointerup={handlePointerUp}
/>

<div
  role="progressbar"
  aria-valuenow={position}
  aria-valuemin={0}
  aria-valuemax={duration}
  aria-valuetext=""
  bind:this={div}
  on:pointerdown={handlePointerDown}
>
  <div class="background" />
  <div class="progress" style="width: {position}%" />
  <div class="thumb" style="left: {position}%" />
</div>

<style>
  div {
    position: relative;
    width: 100%;
    height: 2px;
    /* margin: 1rem 0; */
    padding: 0;
    touch-action: none;
    cursor: pointer;
  }

  div.background {
    position: absolute;
    width: 100%;
    height: 2px;
    /* margin-top: -1px; */
    padding: 0;
    border-radius: 1px;
    background-color: #c4c4c4;
  }

  div.thumb {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    margin-top: -3px;
    margin-left: -4px;
    padding: 0;
    background-color: #001aff;
    cursor: pointer;
  }

  div.progress {
    position: absolute;
    height: 2px;
    /* margin-top: -1px; */
    padding: 0;
    border-radius: 1px;
    background-color: #001aff;
  }
</style>
