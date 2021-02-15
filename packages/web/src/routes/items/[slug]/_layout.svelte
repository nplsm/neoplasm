<script lang="ts">
  import Logo from "../../../components/svg/Logo.svelte"
</script>

<main>
  <!-- <Logo /> -->
  <slot />
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0rem;
    max-width: 22rem;
    max-height: 100%;
  }
</style>
