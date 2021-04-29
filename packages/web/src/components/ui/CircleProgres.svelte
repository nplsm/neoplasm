<script lang="ts">
  export let start = 0
  export let end = 0.9

  export let strokeWidth = 5
  export let strokeColor = "white"

  let length = end - start
  let radius = 50 - strokeWidth / 2

  let strokeDasharayLength = 2 * Math.PI * radius * length
  let strokeDasharayGap = 2 * Math.PI * radius * (1 - length)

  let offset = 0.25
  let strokeDashOffset = 2 * Math.PI * radius * (offset - start)
</script>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle
    stroke={strokeColor}
    stroke-width={strokeWidth}
    stroke-dasharray="{strokeDasharayLength}, {strokeDasharayGap}"
    stroke-dashoffset={strokeDashOffset}
    cx={50}
    cy={50}
    r={radius}
  />
</svg>

<style>
  circle {
    fill: transparent;
    stroke-linecap: round;
  }

  svg {
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    margin: 0;
    padding: 0;
  }
</style>
