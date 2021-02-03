<script lang="ts">
  import { afterUpdate, tick } from "svelte"
  import ArtistString from "./ArtistString.svelte"
  import PlayerControls from "./PlayerControls.svelte"
  import PlayerProgressBar from "./PlayerProgressBar.svelte"
  import PlayerTrack from "./PlayerTrack.svelte"
  import TrackString from "./TrackString.svelte"

  export let tracks = []
  export let cover
  export let title = ""

  let currentTrackIndex = 0
  let currentTime = 0
  let duration = 0
  let paused = true
  let seeking = false

  $: currentTrack = tracks[currentTrackIndex]
  $: currentAudio = currentTrack.audio
  $: prevAvaliable = currentTrackIndex > 0
  $: nextAvaliable = currentTrackIndex < tracks.length - 1

  afterUpdate(() => {
    const track = tracks[currentTrackIndex]
    if (!track.audio) {
      const audio = new Audio(track.src)
      audio.onpause = () => {
        paused = true
      }
      audio.onplay = () => {
        paused = false
      }
      audio.onended = async () => {
        currentAudio.currentTime = 0
        currentTrackIndex++
        currentTime = 0
        await tick()
        currentAudio.play()
      }
      audio.ontimeupdate = (e) => {
        const audio = e.target
        if (audio === currentAudio && !seeking) {
          currentTime = audio.currentTime
        }
      }
      audio.onloadedmetadata = (e) => {
        duration = e.target.duration
      }
      track.audio = audio
    } else {
      duration = track.audio.duration
    }
    tracks[currentTrackIndex] = track
  })

  function handlePlayPause() {
    if (currentAudio.paused) {
      currentAudio.play()
    } else {
      currentAudio.pause()
    }
  }

  async function handlePrev() {
    if (prevAvaliable) {
      const wasPaused = paused
      currentAudio.pause()
      currentAudio.currentTime = 0
      currentTrackIndex--
      currentTime = 0
      if (!wasPaused) {
        await tick()
        currentAudio.play()
      }
    } else {
      currentAudio.currentTime = 0
    }
  }

  async function handleNext() {
    if (nextAvaliable) {
      const wasPaused = paused
      currentAudio.pause()
      currentAudio.currentTime = 0
      currentTrackIndex++
      currentTime = 0
      if (!wasPaused) {
        await tick()
        currentAudio.play()
      }
    }
  }

  function handleSeeking(e) {
    seeking = true
    currentTime = e.target.value
  }

  function handleSeek(e) {
    currentAudio.currentTime = e.target.value
    seeking = false
  }

  async function handleChangeTrack(id) {
    if (currentTrack.id !== id) {
      const wasPaused = paused
      currentAudio.pause()
      currentAudio.currentTime = 0
      currentTrackIndex = tracks.findIndex((track) => track.id === id)
      currentTime = 0
      if (!wasPaused) {
        await tick()
        currentAudio.play()
      }
    }
  }
</script>

<img src={cover.src} alt={title} />

<div class="current_track">
  <h1 class="track">
    <TrackString {...currentTrack} />
  </h1>

  <h3 class="track_artist">
    by <ArtistString {...currentTrack} />
  </h3>

  <PlayerProgressBar
    {currentTime}
    {duration}
    on:input={handleSeeking}
    on:change={handleSeek}
  />

  <PlayerControls
    {paused}
    on:playPause={handlePlayPause}
    on:prev={handlePrev}
    on:next={handleNext}
  />
</div>

<div class="tracklist">
  <ol>
    {#each tracks as track (track.id)}
      <PlayerTrack
        {track}
        current={track.id === currentTrack.id}
        {paused}
        on:click={() => handleChangeTrack(track.id)}
      />
    {/each}
  </ol>
</div>

<style>
  img {
    width: 18.75rem;
    /* max-width: 60rem; */
    padding: 0;
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

  .tracklist {
    display: block;
    justify-content: left;
    align-items: left;
    margin: 0;
    margin-left: 0.2rem;
  }

  ol {
    font-family: HelveticaNeue-Thin, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }
</style>
