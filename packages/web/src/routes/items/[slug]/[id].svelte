<script lang="ts" context="module">
  export async function preload(page) {
    const { slug, id } = page.params
    const res = await this.fetch("http://graphql:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query($slug: String!) {
            item(slug: $slug) {
              release {
                title
                cover
                tracks {
                  _id
                  position
                  title
                  artists {
                    alias
                  }
                  featuring {
                    alias
                  }
                  sources {
                    src
                    type
                  }
                }
                links {
                  target
                  href
                }
              }
              copies {
                _id
              }
            }
          }
        `,
        variables: { slug },
      }),
    })
    if (res.status === 200) {
      const { data } = await res.json()
      const { item } = data
      const { release, copies } = item
      const idIsCorrect = copies.some((copy) => copy._id === id)
      if (idIsCorrect) {
        release.tracks.sort((a, b) => a.position - b.position)
        return { release }
      }
    } else {
      this.error(404, "Not found")
    }
  }
</script>

<script lang="ts">
  import Player from "../../../components/player/Player.svelte"

  export let release
</script>

<svelte:head>
  <title>NEOPLASM — {release.title}</title>
</svelte:head>

<Player {...release} />
