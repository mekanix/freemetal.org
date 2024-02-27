<script lang="ts">
  import IcecastMetadataPlayer from 'icecast-metadata-player'
  import { writable } from 'svelte/store'
  import { mdiPlay, mdiStop } from '@mdi/js'

  let song = writable('')
  let play = writable('play')
  let icon = writable(mdiPlay)

  const player = new IcecastMetadataPlayer("/stream", {
    onMetadata: (meta) => {
      if (meta.ARTIST && meta.TITLE) {
        $song = `${meta.ARTIST} - ${meta.TITLE}`
      }
    },
    metadataTypes: ["ogg"],
  })
  const audio = player.audioElement
  audio.volume = 0.01

  function toggle() {
    if ($play == 'play') {
      $play = 'stop'
      $icon = mdiStop
      player.play()
    } else {
      $play = 'play'
      $icon = mdiPlay
      player.stop()
    }
  }
</script>

<div class="root">
  <div class="content">
    <h1 class="title">
      Free Metal
    </h1>
    <p class="Onjkghri">
      Music under Creative Commons license.
    </p>
  </div>
  <div class="player">
    <div class="play">
      <button on:click={toggle}>
        <svg class="icon">
          <path d={$icon} />
        </svg>
      </button>
    </div>
    <div class="meta">
      <span>{$song}</span>
    </div>
  </div>
</div>

<style>
  .root {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }

  .content {
    flex: 1;
    padding: 10px;
  }

  .title {
    text-align: center;
  }

  .player {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .meta {
    flex: 1;
    display: flex;
    align-items: center;
  }
</style>
