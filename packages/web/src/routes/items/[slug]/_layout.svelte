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
    padding: 0 15px;
    max-width: 30rem;
    max-height: 100%;
  }
</style>
