import { Item, ItemModel } from "./entities/item"
import { Artist, ArtistModel } from "./entities/artist"
import { Release, ReleaseModel } from "./entities/release"
import { Track, TrackModel } from "./entities/track"

export async function seedDatabase() {
  const neoplasm = await ArtistModel.create({
    slug: "neoplasm",
    title: "Neoplasm",
  } as Artist)

  const perfecthuman = await ArtistModel.create({
    slug: "perfect-human",
    title: "Perfect Human",
  } as Artist)

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

  const aaaaa = await ArtistModel.create({
    slug: "aaaaa",
    title: "ААААА",
  } as Artist)

  const qwqwqwqwa = await ArtistModel.create({
    slug: "qwqwqwqwa",
    title: "qwqwqwqwa",
  } as Artist)

  const morimori = await ArtistModel.create({
    slug: "mori-mori",
    title: "Mori Mori",
  } as Artist)

  const cellvl = await ArtistModel.create({
    slug: "cellvl",
    title: "cellvl",
  } as Artist)

  const shyqa = await ArtistModel.create({
    slug: "shyqa",
    title: "Shyqa",
  } as Artist)

  const lyukshi = await ArtistModel.create({
    slug: "lyukshi",
    title: "Lyukshi",
  } as Artist)

  const himera = await ArtistModel.create({
    slug: "himera",
    title: "Himera",
  } as Artist)

  const rehu = await ArtistModel.create({
    slug: "re-hu",
    title: "Re-Hu",
  } as Artist)

  const pozhar = await ArtistModel.create({
    slug: "pozhar",
    title: "Пожар",
  } as Artist)

  const ivanskoryna = await ArtistModel.create({
    slug: "ivan-skoryna",
    title: "Ivan Skoryna",
  } as Artist)

  const ether = await ArtistModel.create({
    slug: "ether",
    title: "éther",
  })

  const lifeoxetine = await ReleaseModel.create({
    slug: "lifeoxetine",
    title: "Lifeoxetine",
    cover: "https://cdn.neoplasm.xyz/images/covers/lifeoxetine.jpg",
    code: "npl0002",
    artists: [
      {
        artist: marblebust._id,
        alias: "Marble Bust",
      },
    ],
    links: [
      {
        target: "apple-music",
        href: "https://music.apple.com/ru/album/lifeoxetine/1530222229",
      },
      {
        target: "boom",
        href: "*",
      },
      {
        target: "spotify",
        href: "https://open.spotify.com/album/6ZPkKdiyAQhwUCTMJ9i8lT",
      },
      {
        target: "bandcamp",
        href: "https://lovvlifer.bandcamp.com/album/lifeoxetine",
      },
      {
        target: "soundcloud",
        href: "https://soundcloud.com/ne-sm/sets/marble-bust-lifeoxetine",
      },
      {
        target: "deezer",
        href: "*",
      },
      {
        target: "youtube-music",
        href: "*",
      },
      {
        target: "yandex-music",
        href: "*",
      },
      {
        target: "pandora",
        href: "*",
      },
    ],
  } as Release)

  const auk = await ReleaseModel.create({
    slug: "a-u-k",
    title: "A U K",
    cover: "https://cdn.neoplasm.xyz/images/covers/a-u-k.jpg",
    code: "npl0003",
    artists: [
      {
        artist: ourv._id,
        alias: "Our.V",
      },
    ],
    links: [
      {
        target: "apple-music",
        href: "https://music.apple.com/ru/album/a-u-k/1498059256",
      },
      {
        target: "boom",
        href: "https://vk.cc/akEskF",
      },
      {
        target: "spotify",
        href: "https://open.spotify.com/album/2SW7gwDQecDx5ZTpP0fzFa",
      },
      {
        target: "bandcamp",
        href: "https://ourdotv.bandcamp.com/album/a-u-k",
      },
      {
        target: "soundcloud",
        href: "https://soundcloud.com/ne-sm/sets/a-u-k",
      },
      {
        target: "deezer",
        href: "https://www.deezer.com/us/album/130533372",
      },
      {
        target: "youtube-music",
        href:
          "https://music.youtube.com/playlist?list=OLAK5uy_mgIGKIVrDsWftvskU91wFmsaGRfzQP29Y",
      },
      {
        target: "yandex-music",
        href: "https://music.yandex.ru/album/9847749",
      },
      {
        target: "pandora",
        href: "*",
      },
    ],
  } as Release)

  const justnowago = await ReleaseModel.create({
    slug: "just-now-ago",
    title: "Just Now Ago",
    cover: "https://cdn.neoplasm.xyz/releases/just-now-ago/cover.jpg",
    code: "npl0005",
    artists: [
      {
        artist: neoplasm._id,
        alias: "Neoplasm",
      },
    ],
    links: [
      {
        target: "apple-music",
        href: "https://music.apple.com/ru/album/just-now-ago/1532519933",
      },
      {
        target: "boom",
        href:
          "https://vk.com/music/album/-2000799746_8799746_d4cbd9ad05ab1b6ba0",
      },
      {
        target: "spotify",
        href: "https://open.spotify.com/album/4d7r4LZ7Vw7pnrIsGe6flU",
      },
      {
        target: "bandcamp",
        href: "https://neoplasm.bandcamp.com/album/just-now-ago",
      },
      {
        target: "soundcloud",
        href: "https://soundcloud.com/ne-sm/sets/just-now-ago-1",
      },
      {
        target: "deezer",
        href: "https://www.deezer.com/us/album/174440052",
      },
      {
        target: "youtube-music",
        href:
          "https://music.youtube.com/playlist?list=OLAK5uy_mpVffxgJrRyn6t1bk14IHE8emmKAiKuBw",
      },
      {
        target: "yandex-music",
        href: "https://music.yandex.ru/album/12174222",
      },
      {
        target: "pandora",
        href: "#",
      },
    ],
  } as Release)

  const gazingAtUThroughASmartphoneScreen = await ReleaseModel.create({
    slug: "gazing-at-u-through-a-smartphone-screen",
    title: "Gazing At U Through A Smartphone Screen",
    cover:
      "https://neoplasm.fra1.cdn.digitaloceanspaces.com/releases/gazing-at-u-through-a-smartphone-screen/cover.jpg",
    code: "npl0006",
    artists: [
      {
        artist: marblebust._id,
        alias: "kolya",
      },
      {
        artist: ether._id,
        alias: "éther",
      },
    ],
    links: [
      {
        target: "apple-music",
        href: "#",
      },
      {
        target: "boom",
        href: "#",
      },
      {
        target: "spotify",
        href: "#",
      },
      {
        target: "bandcamp",
        href: "#",
      },
      {
        target: "soundcloud",
        href: "#",
      },
      {
        target: "deezer",
        href: "#",
      },
      {
        target: "youtube-music",
        href: "#",
      },
      {
        target: "yandex-music",
        href: "#",
      },
      {
        target: "pandora",
        href: "#",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/01%20Marble%20Bust%20%E2%80%93%C2%A0THENEWERA.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/01%20Marble%20Bust%20%E2%80%93%C2%A0THENEWERA.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/02%20Marble%20Bust%20%E2%80%93%C2%A0TRANSGRESSION%20%28feat.%20%D1%83%D0%B2%D1%83%D0%BB%D0%B0%29.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/02%20Marble%20Bust%20%E2%80%93%C2%A0TRANSGRESSION%20%28feat.%20%D1%83%D0%B2%D1%83%D0%BB%D0%B0%29.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/03%20Marble%20Bust%20%E2%80%93%C2%A0ANGELS.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/03%20Marble%20Bust%20%E2%80%93%C2%A0ANGELS.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/04%20Marble%20Bust%20%E2%80%93%C2%A0HINDSIGHT%20%28feat.%20SPARROW%29.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/04%20Marble%20Bust%20%E2%80%93%C2%A0HINDSIGHT%20%28feat.%20SPARROW%29.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/05%20Marble%20Bust%20%E2%80%93%C2%A0SORRYAU.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/05%20Marble%20Bust%20%E2%80%93%C2%A0SORRYAU.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/06%20Marble%20Bust%20%E2%80%93%C2%A0TRANCEGRESSION.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/06%20Marble%20Bust%20%E2%80%93%C2%A0TRANCEGRESSION.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/ogg/07%20Marble%20Bust%20%E2%80%93%C2%A0THELIFTINGHAND.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/lifeoxetine/wav/07%20Marble%20Bust%20%E2%80%93%C2%A0THELIFTINGHAND.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/01%20Our.v%20%E2%80%93%20Wait%20For%20Me%20Here,%20I_ll%20Be%20Right%20There.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/01%20Our.v%20%E2%80%93%20Wait%20For%20Me%20Here,%20I_ll%20Be%20Right%20There.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/02%20Our.v%20%E2%80%93%20Backstage.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/02%20Our.v%20%E2%80%93%20Backstage.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/03%20Our.v%20%E2%80%93%20A%20U%200K_%20What_s%20wrong%20with%20you....ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/03%20Our.v%20%E2%80%93%20A%20U%200K_%20What_s%20wrong%20with%20you....wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/04%20Our.v%20%E2%80%93%20Healthy%20Sleep.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/04%20Our.v%20%E2%80%93%20Healthy%20Sleep.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/05%20Our.v%20%E2%80%93%20Ice%20Cream%20%28ft.%20Jessie%29.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/05%20Our.v%20%E2%80%93%20Ice%20Cream%20%28ft.%20Jessie%29.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/06%20Our.v%20%E2%80%93%20League.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/06%20Our.v%20%E2%80%93%20League.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/07%20Our.v%20%E2%80%93%20Do%20not%20leave%20me.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/07%20Our.v%20%E2%80%93%20Do%20not%20leave%20me.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/08%20Our.v%20%E2%80%93%20Justified%20Misunderstanding.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/08%20Our.v%20%E2%80%93%20Justified%20Misunderstanding.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/09%20Our.v%20%E2%80%93%20Soft%20Forms.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/09%20Our.v%20%E2%80%93%20Soft%20Forms.wav",
          type: "audio/wav",
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
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/ogg/10%20Our.v%20%E2%80%93%20Invenire%20Tentant.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/music/a-u-k/wav/10%20Our.v%20%E2%80%93%20Invenire%20Tentant.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Angel Energy",
      position: 1,
      release: justnowago._id,
      artists: [
        {
          artist: qwqwqwqwa._id,
          alias: "qwqwqwqwa",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/1.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/1.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/1.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Love Cut",
      position: 2,
      release: justnowago._id,
      artists: [
        {
          artist: morimori._id,
          alias: "Mori Mori",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/2.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/2.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/2.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Nostalgia",
      position: 3,
      release: justnowago._id,
      artists: [
        {
          artist: cellvl._id,
          alias: "cellvl",
        },
      ],
      featuring: [
        {
          artist: shyqa._id,
          alias: "Shyqa",
        },
      ],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/3.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/3.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/3.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "5EURO",
      position: 4,
      release: justnowago._id,
      artists: [
        {
          artist: lyukshi._id,
          alias: "Lyukshi",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/4.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/4.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/4.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Goodbye",
      position: 5,
      release: justnowago._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "kolya",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/5.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/5.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/5.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "You're Going To Be Okay",
      position: 6,
      release: justnowago._id,
      artists: [
        {
          artist: himera._id,
          alias: "Himera",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/6.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/6.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/6.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Alder King",
      position: 7,
      release: justnowago._id,
      artists: [
        {
          artist: qwqwqwqwa._id,
          alias: "qwqwqwqwa",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/7.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/7.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/7.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "De Profundis ",
      position: 8,
      release: justnowago._id,
      artists: [
        {
          artist: rehu._id,
          alias: "Re-Hu",
        },
      ],
      featuring: [
        {
          artist: pozhar._id,
          alias: "Пожар",
        },
      ],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/8.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/8.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/8.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "user-friendly",
      position: 9,
      release: justnowago._id,
      artists: [
        {
          artist: aaaaa._id,
          alias: "Aleksei Podat",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/9.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/9.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/9.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "dumb fuck 2",
      position: 10,
      release: justnowago._id,
      artists: [
        {
          artist: ivanskoryna._id,
          alias: "Ivan Skoryna",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/10.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/10.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/10.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "TG2",
      position: 11,
      release: justnowago._id,
      artists: [
        {
          artist: perfecthuman._id,
          alias: "Perfect Human",
        },
      ],
      featuring: [
        {
          artist: marblebust._id,
          alias: "Marble Bust",
        },
      ],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/11.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/11.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/11.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Primus Tandem",
      position: 12,
      release: justnowago._id,
      artists: [
        {
          artist: ourv._id,
          alias: "qwqwqwqwa",
        },
      ],
      featuring: [],
      sources: [
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/mp3/12.mp3",
          type: "audio/mp3",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/ogg/12.ogg",
          type: "audio/ogg",
        },
        {
          src: "https://cdn.neoplasm.xyz/releases/just-now-ago/wav/12.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Gazing at U Through a Smartphone Screen",
      position: 1,
      release: gazingAtUThroughASmartphoneScreen._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "kolya",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/mp3/1.mp3",
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/ogg/1.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/wav/1.wav",
          type: "audio/wav",
        },
      ],
    },
    {
      title: "Crisis07",
      position: 2,
      release: gazingAtUThroughASmartphoneScreen._id,
      artists: [
        {
          artist: marblebust._id,
          alias: "kolya",
        },
      ],
      featuring: [],
      sources: [
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/mp3/2.mp3",
          type: "audio/mp3",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/ogg/2.ogg",
          type: "audio/ogg",
        },
        {
          src:
            "https://cdn.neoplasm.xyz/releases/gazing-at-u-through-a-smartphone-screen/wav/2.wav",
          type: "audio/wav",
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
    {
      slug: "just-now-ago",
      release: justnowago._id,
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
      slug: "gazing-at-u-through-a-smartphone-screen",
      release: gazingAtUThroughASmartphoneScreen._id,
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
      html: `
      <div style="margin: 2rem 1rem 0;text-align: center; ">
        <p>
          Get 15% off on any item in <a href="https://etherparfum.com/shop">éther</a
          >
          and 20% off on
          <a href="https://neoplasm.bandcamp.com/merch/just-now-ago-silk-scarf"
            >"Just Now Ago" Silk Scarf</a
          > using promocode:
        </p>
        <p on:click={}  style="font-size:larger;margin: 1rem
        ">GAZE</p>
      </div>
      `,
    },
  ] as Item[])
}
