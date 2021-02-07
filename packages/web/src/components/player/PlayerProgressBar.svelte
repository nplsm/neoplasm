<script lang="ts">
  import TimeString from "./TimeString.svelte"
  import Progress from "./Progress.svelte"

  export let currentTime = 0
  export let duration = 0

  $: showHours = duration >= 60 * 60
  $: timeLeft = currentTime - duration
</script>

<div>
  <div class="time"><TimeString time={currentTime} {showHours} /></div>
  <Progress {currentTime} {duration} on:input on:change />
  <div class="time"><TimeString time={timeLeft} {showHours} /></div>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .time {
    font-family: HelveticaNeue, Helvetica, sans-serif;
    margin: 0rem 0.5rem;
    color: rgba(0, 0, 0, 0.8);
    line-height: 150%;
    font-size: 0.9rem;
    text-align: left;
    /* padding-inline-start: 20px; */
    /* writing-mode: horizontal-tb; */
  }
</style>
