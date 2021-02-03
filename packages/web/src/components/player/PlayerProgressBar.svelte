<script lang="ts">
  import TimeString from "./TimeString.svelte"

  export let currentTime = 0
  export let duration = 0

  $: showHours = duration >= 60 * 60
  $: timeLeft = currentTime - duration
</script>

<div>
  <div class="time"><TimeString time={currentTime} {showHours} /></div>
  <input
    type="range"
    bind:value={currentTime}
    on:input
    on:change
    max={duration * 0.99999}
    step={duration / 10000}
  />
  <div class="time"><TimeString time={timeLeft} {showHours} /></div>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 1rem;
  }

  /*Chrome*/
  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
      overflow: hidden;
      width: 13.8rem;
      margin-left: 1rem;
      margin-right: 1rem;
      height: 0.2rem;
      -webkit-appearance: none;
      background-color: #c4c4c4;
      border-color: transparent;
      border: 0px solid #000101;
      color: transparent;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      height: 0px;
      -webkit-appearance: none;
      color: #000000;
      margin-top: -1px;
    }

    input[type="range"]::-webkit-slider-thumb {
      width: 0.01rem;
      height: 0.01rem;
      -webkit-appearance: none;
      cursor: pointer;
      background: #000a64;
      box-shadow: -120px 0 0 120px #001aff;
    }
  }

  /** FF*/
  input[type="range"]::-moz-range-progress {
    background-color: #001aff;
  }
  input[type="range"]::-moz-range-track {
    background-color: #c4c4c4;
  }
  /* IE*/
  input[type="range"]::-ms-fill-lower {
    background-color: #001aff;
  }
  input[type="range"]::-ms-fill-upper {
    background-color: #c4c4c4;
  }

  .time {
    font-family: HelveticaNeue, Helvetica, sans-serif;
    margin: 0rem;
    color: rgba(0, 0, 0, 0.8);
    line-height: 150%;
    font-size: 0.9rem;
    text-align: left;
    /* padding-inline-start: 20px; */
    /* writing-mode: horizontal-tb; */
  }
</style>
