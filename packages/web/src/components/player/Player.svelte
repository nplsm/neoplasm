<script lang="ts">
  import { tick } from "svelte"
  import ArtistString from "./ArtistString.svelte"
  import PlayerControls from "./PlayerControls.svelte"
  import PlayerProgressBar from "./PlayerProgressBar.svelte"
  import PlayerTrack from "./PlayerTrack.svelte"
  import TrackString from "./TrackString.svelte"
  import SocialLogos from "../svg/SocialLogos.svelte"

  export let tracks = []
  export let cover
  export let links
  export let title = ""

  tracks = tracks.map((track) => {
    return { ...track, paused: true }
  })

  let currentTrackIndex = 0

  let seeking = false
  let newTime = 0

  $: time = seeking ? newTime : tracks[currentTrackIndex].currentTime

  async function play() {
    await tick()
    tracks[currentTrackIndex].paused = false
  }

  function pause() {
    tracks[currentTrackIndex].paused = true
  }

  function reset() {
    tracks[currentTrackIndex].audio.currentTime = 0
  }

  function stop() {
    pause()
    reset()
  }

  function handlePlayPause() {
    if (tracks[currentTrackIndex].paused) {
      play()
      if (tracks[currentTrackIndex].played.length === 0) {
        tracks[currentTrackIndex].audio.currentTime = newTime
        newTime = 0
        seeking = false
      }
    } else {
      pause()
    }
  }

  function handleTrackChangeWith(trackChangingFunction: { (): void }) {
    const wasPaused = tracks[currentTrackIndex].paused
    newTime = 0
    stop()
    trackChangingFunction()
    if (!wasPaused) {
      play()
    }
  }

  function handlePrev() {
    if (currentTrackIndex > 0) {
      handleTrackChangeWith(() => {
        currentTrackIndex--
      })
    }
  }

  function handleNext() {
    if (currentTrackIndex < tracks.length - 1) {
      handleTrackChangeWith(() => {
        currentTrackIndex++
      })
    }
  }

  function handleChangeTrack(id) {
    if (tracks[currentTrackIndex]._id !== id) {
      handleTrackChangeWith(() => {
        currentTrackIndex = tracks.findIndex((track) => track._id === id)
      })
    }
  }

  function handleEnded() {
    handleNext()
    play()
  }

  function handleTimeUpdate(event, track) {
    if (!seeking) {
      track.currentTime = event.currentTarget.currentTime
    }
  }

  function handleSeeking(event) {
    seeking = true
    newTime = event.detail.newTime
  }

  function handleSeek(event) {
    if (tracks[currentTrackIndex].played.length > 0) {
      tracks[currentTrackIndex].audio.currentTime = event.detail.newTime
      newTime = 0
      seeking = false
    }
  }
</script>

{#each tracks as track (track._id)}
  <audio
    bind:played={track.played}
    bind:duration={track.duration}
    bind:paused={track.paused}
    bind:this={track.audio}
    on:ended={handleEnded}
    on:timeupdate={(event) => handleTimeUpdate(event, track)}
  >
    <track kind="captions" />
    {#each track.sources as source}
      <source src={source.src} type={source.type} />
    {/each}
  </audio>
{/each}

<div class="main_block">
  <img src={cover} alt={title} />

  <div class="current_track">
    <h1 class="track">
      <TrackString {...tracks[currentTrackIndex]} />
    </h1>

    <h3 class="track_artist">
      by <ArtistString {...tracks[currentTrackIndex]} />
    </h3>

    <PlayerProgressBar
      currentTime={time}
      duration={tracks[currentTrackIndex].duration}
      on:input={handleSeeking}
      on:change={handleSeek}
    />

    <PlayerControls
      paused={tracks[currentTrackIndex].paused}
      on:playPause={handlePlayPause}
      on:prev={handlePrev}
      on:next={handleNext}
    />
  </div>

  <div class="social" />

  <div class="tracklist">
    <ol>
      {#each tracks as track (track._id)}
        <PlayerTrack
          {track}
          current={track._id === tracks[currentTrackIndex]._id}
          paused={tracks[currentTrackIndex].paused}
          on:click={() => handleChangeTrack(track._id)}
        />
      {/each}
    </ol>
  </div>
  <SocialLogos {links} />
</div>

<style>
  .main_block {
    padding: 1rem 0 1rem 0;
  }

  img {
    width: 18.75rem;
    /* max-width: 60rem; */
    padding: 0;
    /* margin-top: 1rem; */
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  div {
    width: 18.75rem;
    display: block;
    justify-content: center;
    margin: 0 auto;
  }

  .track {
    font-family: HelveticaNeue-Thin, Helvetica, sans-serif;
    margin: 0 auto;
    padding-top: 0.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
  }

  .track_artist {
    font-family: HelveticaNeue, Helvetica, sans-serif;
    margin: 0;
    font-size: 0.7rem;
    font-weight: 500;
    text-align: left;
    color: rgba(0, 0, 0, 0.4);
  }

  .current_track {
    margin: 0 auto;
    /* margin-bottom: 20px; */
  }

  .social {
    display: block;
  }

  .tracklist {
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 0 auto;
    /* height: 100%; */
    /* overflow: auto; */
    /* overflow-y: scroll; */
    /* height: 200px; */
    /* scroll-behavior:smooth; */
  }

  ol {
    font-family: HelveticaNeue-Thin, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.8);
    padding: 0;
    margin: 0 0 0 1rem;
    /* margin: 0 auto; */
  }
</style>
