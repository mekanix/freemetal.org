<script lang="ts">
  import IcecastMetadataPlayer from 'icecast-metadata-player'
  import { writable } from 'svelte/store'
  import { mdiPlay, mdiStop } from '@mdi/js'

  let song = writable('')
  let play = writable('play')
  let icon = writable(mdiPlay)

  const player = new IcecastMetadataPlayer("https://freemetal.org/stream", {
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
  <h1 class="XzPsdHAE">
    Free Metal
  </h1>
  <p class="Onjkghri">
    Music under Creative Commons license.
  </p>
</div>
<div class="nGUggimk">
  <div class="SqoxWuhX">
    <button on:click={toggle}>
      <svg class="AGVZBFJe">
        <path d={$icon} />
      </svg>
    </button>
  </div>
  <div class="AeBkPuwl">
      <span class="EBNiZXFq">
        {$song}
      </span>
  </div>
</div>

<style>
  .root {
    padding: 10px;
    height: calc(100vh - 50px);
  }

  .XzPsdHAE {
    text-align: center;
  }

  .nGUggimk {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  .SqoxWuhX {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .AGVZBFJe {
    width: 30px;
    height: 30px;
  }

  .AeBkPuwl {
    flex: 1;
    display: flex;
    align-items: center;
  }
</style>
