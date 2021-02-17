<script lang="ts">
  import TimeString from "./TimeString.svelte"
  import Progress from "./Progress.svelte"

  export let currentTime = 0
  export let duration = 0

  $: showHours = duration >= 60 * 60
  $: timeLeft = currentTime - duration
</script>

<div>
  <div class="time_left"><TimeString time={currentTime} {showHours} /></div>
  <Progress {currentTime} {duration} on:input on:change />
  <div class="time_right"><TimeString time={timeLeft} {showHours} /></div>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 1rem;
  }

  .time_left,
  .time_right {
    font-family: HelveticaNeue, Helvetica, sans-serif;
    margin: 0rem 0.8rem;
    color: rgba(0, 0, 0, 0.54);
    font-size: 10pt;
  }

  .time_left {
    margin-left: 0;
  }

  .time_right {
    margin-right: 0;
  }
</style>
