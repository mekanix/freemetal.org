const stream = new Audio('/stream')


export default class PlayerStore {
  constructor(detail) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    stream.volume = this.detail.volume
    stream.onplay = this.readMetadata
    stream.oncanplay = this.canPlay
    this.stream = stream
  }

  setVolume = (volume) => {
    this.stream.volume = volume
    this.setDetail({ ...this.detail, volume })
  }

  readMetadata = () => {
    if (this.stream.mozGetMetadata) {
      const meta = this.stream.mozGetMetadata()
      this.setDetail({ ...this.detail, ...meta })
    }
  }

  canPlay = () => {
    this.setDetail({ ...this.detail, ready: true })
  }

  play = () => {
    this.stream.play()
    this.setDetail({ ...this.detail, playing: true })
  }

  pause = () => {
    this.stream.pause()
    this.setDetail({ ...this.detail, playing: false })
  }

  toggle = () => {
    if (this.detail.playing) { this.pause() }
    else { this.play() }
  }
}
