const fetch = require("node-fetch")

test("Correct fetch of items", async () => {
  const slug = "lifeoxetine"
  const response = await fetch("http://localhost:3001/", {
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
            }
            copies {
              _id
              shiped
            }
          }
        }
      `,
      variables: { slug },
    }),
  })
  const { data } = await response.json()
  const { item } = await data
  expect(item).toMatchSnapshot()
})
