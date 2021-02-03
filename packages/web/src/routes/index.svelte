<script lang="ts">
  import Player from "../components/player/Player.svelte"
  import SocialLogos from "../components/svg/SocialLogos.svelte"

  const release = {
    id: 2,
    title: "Lifeoxetine",
    artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
    cover: { src: "/lifeoxetine/cover.jpg" },
    tracks: [
      {
        id: 1,
        position: 1,
        title: "THENEWERA",
        featuring: [],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/1. THENEWERA.wav"],
      },
      {
        id: 2,
        position: 2,
        title: "TRANSGRESSION",
        featuring: [{ alias: "увула", slug: null }],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/2. TRANSGRESSION (feat. увула).wav"],
      },
      {
        id: 3,
        position: 3,
        title: "ANGELS",
        featuring: [],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/3. ANGELS.wav"],
      },
      {
        id: 4,
        position: 4,
        title: "HINDSIGHT",
        featuring: [{ alias: "SPARROW", slug: null }],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/4. HINDSIGHT (feat. SPARROW).wav"],
      },
      {
        id: 5,
        position: 5,
        title: "SORRYAU",
        featuring: [],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/5. SORRYAU.wav"],
      },
      {
        id: 6,
        position: 6,
        title: "TRANCEGRESSION",
        featuring: [],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/6. TRANCEGRESSION.wav"],
      },
      {
        id: 7,
        position: 7,
        title: "THELIFTINGHAND",
        featuring: [],
        artists: [{ alias: "Marble Bust", slug: "marble-bust" }],
        src: ["/lifeoxetine/7. THELIFTINGHAND.wav"],
      },
    ],
  }
</script>

<Player {...release} />
<SocialLogos />
