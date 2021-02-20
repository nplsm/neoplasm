<script lang="ts">
  export let status: number
  export let error: Error

  const dev = process.env.NODE_ENV === "development"
</script>

<svelte:head>
  <title>NEOPLASM — {status}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
