<script lang="ts" context="module">
  export async function preload(page) {
    const { slug, id } = page.params
    const res = await this.fetch(`http://items:3001/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            Items {
              release
              copies {
                _id
                shiped
              }
            }
          }
        `,
        variables: {},
      }),
    })
    const items = await res.json()
    return { slug, id, items }
  }
</script>

<script lang="ts">
  export let slug: string
  export let id: string
  export let items: string
</script>

<h1>Item</h1>
<h2>{slug}</h2>
<p>{id}</p>
{#each items as item}
  {item}
{/each}
