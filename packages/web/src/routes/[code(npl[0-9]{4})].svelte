<script lang="ts" context="module">
  export async function preload(page) {
    const { code } = page.params
    const { id } = page.query
    const res = await this.fetch("http://graphql:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query($code: String) {
            release(code: $code) {
              slug
            }
          }
        `,
        variables: { code },
      }),
    })
    if (res.status === 200) {
      const { data } = await res.json()
      const { release } = data
      const { slug } = release
      return this.redirect(302, `/items/${slug}/${id}`)
    } else {
      this.error(404, "Not found")
    }
  }
</script>
