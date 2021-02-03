import { Item, ItemModel } from "./entities/item"
import { Artist, ArtistModel } from "./entities/artist"
import { Release, ReleaseModel } from "./entities/release"
import { Track, TrackModel } from "./entities/track"

export async function seedDatabase() {
  const marblebust = await ArtistModel.create({
    slug: "marble-bust",
    title: "Marble Bust",
  } as Artist)

  const ourv = await ArtistModel.create({
    slug: "our-v",
    title: "Our.V",
  } as Artist)

  const uvula = await ArtistModel.create({
    slug: "uvula",
    title: "Увула",
  } as Artist)

  const sparrow = await ArtistModel.create({
    slug: "sparrow",
    title: "Sparrow",
  } as Artist)

  const jessie = await ArtistModel.create({
    slug: "jessie",
    title: "Jessie",
  } as Artist)

  const lifeoxetine = await ReleaseModel.create({
    slug: "lifeoxetine",
    title: "Lifeoxetine",
    artists: [
      {
        artist: marblebust._id,
        alias: "Marble Bust",
      },
    ],
  } as Release)

  const auk = await ReleaseModel.create({
    slug: "a-u-k",
    title: "A U K",
    artists: [
      {
        artist: ourv._id,
        alias: "Our.V",
      },
    ],
  } as Release)

  await TrackModel.create([
    {
      title: "THENEWERA",
      position: 1,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/01%20Marble%20Bust%20%E2%80%93%C2%A0THENEWERA.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/01%20Marble%20Bust%20%E2%80%93%C2%A0THENEWERA.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/01%20Marble%20Bust%20%E2%80%93%C2%A0THENEWERA.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "TRANSGRESSION",
      position: 2,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [
        {
          artist: uvula._id,
          alias: "увула",
        },
      ],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/02%20Marble%20Bust%20%E2%80%93%C2%A0TRANSGRESSION%20%28feat.%20%D1%83%D0%B2%D1%83%D0%BB%D0%B0%29.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/02%20Marble%20Bust%20%E2%80%93%C2%A0TRANSGRESSION%20%28feat.%20%D1%83%D0%B2%D1%83%D0%BB%D0%B0%29.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/02%20Marble%20Bust%20%E2%80%93%C2%A0TRANSGRESSION%20%28feat.%20%D1%83%D0%B2%D1%83%D0%BB%D0%B0%29.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "ANGELS",
      position: 3,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/03%20Marble%20Bust%20%E2%80%93%C2%A0ANGELS.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/03%20Marble%20Bust%20%E2%80%93%C2%A0ANGELS.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/03%20Marble%20Bust%20%E2%80%93%C2%A0ANGELS.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "HINDSIGHT",
      position: 4,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [
        {
          artist: sparrow._id,
          alias: "sparrow",
        },
      ],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/04%20Marble%20Bust%20%E2%80%93%C2%A0HINDSIGHT%20%28feat.%20SPARROW%29.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/04%20Marble%20Bust%20%E2%80%93%C2%A0HINDSIGHT%20%28feat.%20SPARROW%29.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/04%20Marble%20Bust%20%E2%80%93%C2%A0HINDSIGHT%20%28feat.%20SPARROW%29.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "SORRYAU",
      position: 5,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/05%20Marble%20Bust%20%E2%80%93%C2%A0SORRYAU.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/05%20Marble%20Bust%20%E2%80%93%C2%A0SORRYAU.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/05%20Marble%20Bust%20%E2%80%93%C2%A0SORRYAU.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "TRANCEGRESSION",
      position: 6,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/06%20Marble%20Bust%20%E2%80%93%C2%A0TRANCEGRESSION.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/06%20Marble%20Bust%20%E2%80%93%C2%A0TRANCEGRESSION.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/06%20Marble%20Bust%20%E2%80%93%C2%A0TRANCEGRESSION.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "THELIFTINGHAND",
      position: 7,
      release: lifeoxetine._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/mp3/07%20Marble%20Bust%20%E2%80%93%C2%A0THELIFTINGHAND.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/07%20Marble%20Bust%20%E2%80%93%C2%A0THELIFTINGHAND.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/07%20Marble%20Bust%20%E2%80%93%C2%A0THELIFTINGHAND.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Wait for me here, I'll be right there",
      position: 1,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/01%20Our.v%20%E2%80%93%20Wait%20For%20Me%20Here,%20I_ll%20Be%20Right%20There.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/01%20Our.v%20%E2%80%93%20Wait%20For%20Me%20Here,%20I_ll%20Be%20Right%20There.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/01%20Our.v%20%E2%80%93%20Wait%20For%20Me%20Here,%20I_ll%20Be%20Right%20There.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Backstage",
      position: 2,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/02%20Our.v%20%E2%80%93%20Backstage.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/02%20Our.v%20%E2%80%93%20Backstage.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/02%20Our.v%20%E2%80%93%20Backstage.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "A U 0K& What's wrong with you...",
      position: 3,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/03%20Our.v%20%E2%80%93%20A%20U%200K_%20What_s%20wrong%20with%20you....mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/03%20Our.v%20%E2%80%93%20A%20U%200K_%20What_s%20wrong%20with%20you....ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/03%20Our.v%20%E2%80%93%20A%20U%200K_%20What_s%20wrong%20with%20you....wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Healthy Sleep",
      position: 4,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/04%20Our.v%20%E2%80%93%20Healthy%20Sleep.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/04%20Our.v%20%E2%80%93%20Healthy%20Sleep.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/04%20Our.v%20%E2%80%93%20Healthy%20Sleep.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Ice Cream",
      position: 5,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [
        {
          artist: jessie._id,
          alias: "Jessie",
        },
      ],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/05%20Our.v%20%E2%80%93%20Ice%20Cream%20%28ft.%20Jessie%29.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/05%20Our.v%20%E2%80%93%20Ice%20Cream%20%28ft.%20Jessie%29.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/05%20Our.v%20%E2%80%93%20Ice%20Cream%20%28ft.%20Jessie%29.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "League",
      position: 6,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/06%20Our.v%20%E2%80%93%20League.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/06%20Our.v%20%E2%80%93%20League.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/06%20Our.v%20%E2%80%93%20League.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Do not leave me",
      position: 7,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/07%20Our.v%20%E2%80%93%20Do%20not%20leave%20me.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/07%20Our.v%20%E2%80%93%20Do%20not%20leave%20me.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/07%20Our.v%20%E2%80%93%20Do%20not%20leave%20me.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Justified Misunderstanding",
      position: 8,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/08%20Our.v%20%E2%80%93%20Justified%20Misunderstanding.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/08%20Our.v%20%E2%80%93%20Justified%20Misunderstanding.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/08%20Our.v%20%E2%80%93%20Justified%20Misunderstanding.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Soft Forms",
      position: 9,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/09%20Our.v%20%E2%80%93%20Soft%20Forms.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/09%20Our.v%20%E2%80%93%20Soft%20Forms.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/09%20Our.v%20%E2%80%93%20Soft%20Forms.wav",
          type: "wav",
        },
      ],
    },
    {
      title: "Invenire Tentant",
      position: 10,
      release: auk._id,
      artists: [
        {
          artist: ourv._id,
          alias: "Our.V",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/mp3/10%20Our.v%20%E2%80%93%20Invenire%20Tentant.mp3",
          type: "mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/10%20Our.v%20%E2%80%93%20Invenire%20Tentant.ogg",
          type: "ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/10%20Our.v%20%E2%80%93%20Invenire%20Tentant.wav",
          type: "wav",
        },
      ],
    },
  ] as Track[])

  await ItemModel.create([
    {
      slug: "lifeoxetine",
      release: lifeoxetine._id,
      copies: [
        {
          _id: "4209348102a09234f80293b42b908903",
          shiped: true,
        },
        {
          _id: "4209234532047234f80293b42b908903",
          shiped: false,
        },
      ],
    },
    {
      slug: "a-u-k",
      release: auk._id,
      copies: [
        {
          _id: "4209348102a09234f80293b42b908903",
          shiped: true,
        },
        {
          _id: "4209234532047234f80293b42b908903",
          shiped: false,
        },
      ],
    },
  ] as Item[])
}
