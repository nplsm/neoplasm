<script lang="ts">
  export let time: number = 0
  export let showHours: boolean = false

  $: timeNegative = time < 0
  $: date = new Date(0, 0, 0, 0, 0, Math.abs(time))
  $: hours = date.getHours()
  $: minutes = showHours
    ? date.getMinutes().toString().padStart(2, "0")
    : date.getMinutes()
  $: seconds = date.getSeconds().toString().padStart(2, "0")
</script>

{#if timeNegative}-{/if}{#if showHours}{hours}:{/if}{minutes}:{seconds}
