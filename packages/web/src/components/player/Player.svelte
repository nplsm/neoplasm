<script lang="ts">
  import { tick } from "svelte"
  import PlayerTrack from "./PlayerTrack.svelte"
  import SocialLogos from "../svg/SocialLogos.svelte"
  import Menu from "../ui/Menu.svelte"

  export let tracks = []
  export let artists = []
  export let cover
  export let links
  export let title = ""
  export let html
  export let download = "#"

  let showControls = false

  const showArtists = artists.every((artist) => artist.alias == "Neoplasm")

  tracks = tracks.map((track) => {
    return { ...track, paused: true }
  })

  let currentTrackIndex = 0

  let seeking = false
  let newTime = 0

  $: time = seeking ? newTime : tracks[currentTrackIndex].currentTime

  async function play() {
    showControls = true
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

  function handlePlay() {
    if (tracks[currentTrackIndex].paused) {
      play()
      if (tracks[currentTrackIndex].played.length === 0) {
        tracks[currentTrackIndex].audio.currentTime = newTime
        newTime = 0
        seeking = false
      }
    } else {
      stop()
      play()
    }
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
      {#if source.type === "audio/ogg"}
        <source src={source.src} type={source.type} />
      {/if}
    {/each}
    {#each track.sources as source}
      {#if source.type === "audio/mp3"}
        <source src={source.src} type={source.type} />
      {/if}
    {/each}
    {#each track.sources as source}
      {#if source.type === "audio/wav"}
        <source src={source.src} type={source.type} />
      {/if}
    {/each}
  </audio>
{/each}

<div class="main_block">
  <img src={cover} alt={title} />
  <div class="release_title_block">
    <div class="release_info">
      <div class="release_text">
        <h1 class="release_title">{title}</h1>
        {#if artists.length != 0}
          <p class="release_artist">
            by {#each artists as artist, i}
              {artist.alias}
              {#if i != artists.length - 1}x {/if}{/each}
          </p>
        {/if}
      </div>
      <div class="buttons">
        <button on:click={handlePlayPause}>
          {#if tracks[currentTrackIndex].paused}
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM9.25156 7.10781L5.83906 9.59062C5.82035 9.60407 5.7983 9.61209 5.77533 9.61382C5.75236 9.61555 5.72935 9.61091 5.70884 9.60041C5.68834 9.58992 5.67112 9.57397 5.65908 9.55433C5.64705 9.53468 5.64066 9.5121 5.64062 9.48906V4.52656C5.64055 4.50348 5.64687 4.48082 5.65888 4.46111C5.67089 4.4414 5.68812 4.4254 5.70867 4.41488C5.72922 4.40436 5.75228 4.39974 5.7753 4.40153C5.79831 4.40331 5.82038 4.41144 5.83906 4.425L9.25156 6.90625C9.26768 6.91765 9.28084 6.93275 9.28991 6.95029C9.29899 6.96783 9.30373 6.98729 9.30373 7.00703C9.30373 7.02678 9.29899 7.04623 9.28991 7.06377C9.28084 7.08131 9.26768 7.09641 9.25156 7.10781V7.10781Z"
              />
            </svg>
          {:else}
            <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM5.75 9.375C5.75 9.44375 5.69375 9.5 5.625 9.5H4.875C4.80625 9.5 4.75 9.44375 4.75 9.375V4.625C4.75 4.55625 4.80625 4.5 4.875 4.5H5.625C5.69375 4.5 5.75 4.55625 5.75 4.625V9.375ZM9.25 9.375C9.25 9.44375 9.19375 9.5 9.125 9.5H8.375C8.30625 9.5 8.25 9.44375 8.25 9.375V4.625C8.25 4.55625 8.30625 4.5 8.375 4.5H9.125C9.19375 4.5 9.25 4.55625 9.25 4.625V9.375Z"
              />
            </svg>
          {/if}
        </button>
        <a href={download}
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM9 8V4H11V8H14L10 12L6 8H9ZM15 15H5V13H15V15Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="tracklist">
    <ol>
      {#each tracks as track (track._id)}
        <PlayerTrack
          {track}
          current={track._id === tracks[currentTrackIndex]._id}
          paused={tracks[currentTrackIndex].paused}
          {showArtists}
          on:click={() => handleChangeTrack(track._id)}
        />
      {/each}
    </ol>
  </div>

  {@html html}

  <SocialLogos {links} />
</div>
<!-- {#if showControls}<CompactControls
    currentTrack={tracks[currentTrackIndex]}
    paused={tracks[currentTrackIndex].paused}
    currentTime={time}
    duration={tracks[currentTrackIndex].duration}
    on:playPause={handlePlayPause}
    on:prev={handlePrev}
    on:next={handleNext}
  />{/if} -->

<Menu
  currentTrack={tracks[currentTrackIndex]}
  currentTime={time}
  paused={tracks[currentTrackIndex].paused}
  duration={tracks[currentTrackIndex].duration}
  {cover}
  {title}
  on:seeking={handleSeeking}
  on:seek={handleSeek}
  on:playPause={handlePlayPause}
  on:prev={handlePrev}
  on:next={handleNext}
/>

<!-- 
<div class="current_track">
  <p>
    <ArtistString {...tracks[currentTrackIndex]} /> —
    <TrackString {...tracks[currentTrackIndex]} />
  </p>

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
</div> -->
<style>
  .main_block {
    padding: 1rem 0 1rem 0;
  }

  .release_info {
    display: flex;
    margin: 0.5rem 0 2rem 0;
    padding: 0 0;
    justify-content: space-between;
    align-items: center;
  }

  .release_title_block {
    margin: 0;
    padding: 0;
  }

  .release_title {
    font-size: 1.2rem;
    margin: 0.5rem 0 0.2rem 0;
    padding: 0;
  }
  .release_text {
    margin: 0;
    padding: 0;
  }
  .release_artist {
    font-size: 1.2rem;
    letter-spacing: -0.04em;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.8);
    line-height: 150%;
  }
  .buttons {
    display: flex;
    margin: 0.5rem 0 0.5rem auto;
    padding: 0;
  }

  img {
    width: 100%;
    /* max-width: 60rem; */
    padding: 0;
    /* margin-top: 1rem; */
    margin: 0 auto;
    display: block;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  div {
    /* width: 18.75rem; */
    display: block;
    justify-content: center;
    margin: 0 auto;
    padding: 0 0.5rem;
  }

  /* .track {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    margin: 0 auto;
    padding-top: 0.2rem;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
  }

  .track_artist {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    margin: 0;
    font-size: 0.7rem;
    font-weight: 500;
    text-align: left;
    color: rgba(0, 0, 0, 0.4);
  } */

  .current_track {
    margin: 1rem auto;
    text-align: center;
    /* margin-bottom: 20px; */
  }

  .tracklist {
    display: flex;
    justify-content: left;
    align-items: left;
    margin: 0 auto;
    padding: 0;
    /* height: 100%; */
    /* overflow: auto; */
    /* overflow-y: scroll; */
    /* height: 200px; */
    /* scroll-behavior:smooth; */
  }

  ol {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    color: rgba(0, 0, 0, 0.8);
    padding: 0;
    margin: 0 0 0 1rem;
    /* margin: 0 auto; */
  }

  .buttons > button,
  .buttons > a {
    background: transparent;
    border: transparent;
    fill: rgba(0, 0, 0, 0.54);
    margin: 0;
    padding: 0 0 0 8px;
    width: 56px;
    height: 56px;
  }

  .buttons > a {
    width: 48px;
  }

  .buttons > button:hover,
  .buttons > a:hover {
    transform: scale(1.05);
    transition: opacity 0.2s, transform 0.1s ease-in-out;
  }

  .buttons > button > svg,
  .buttons > a > svg {
    width: 100%;
    height: 100%;
  }
</style>
