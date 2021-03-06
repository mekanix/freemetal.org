import React from 'react'
// import PropTypes from 'prop-types'
import {
  IconButton,
} from '@material-ui/core'
import {
  withStore,
} from 'freenit'
import PlayIcon from '@material-ui/icons/PlayArrow'
import StopIcon from '@material-ui/icons/Stop'
// import VolumeFullIcon from '@material-ui/icons/VolumeUp'
// import VolumeMutedIcon from '@material-ui/icons/VolumeMute'
// import VolumeHalfIcon from '@material-ui/icons/VolumeDown'
import styles from './styles'


class PlayerBar extends React.Component {
  toggle = () => {
    this.props.store.player.toggle()
  }

  render() {
    const { player } = this.props.store
    const playbackIcon = player.detail.playing ? <StopIcon /> : <PlayIcon />
    const title = player.detail.ARTIST
      ? `${player.detail.ARTIST} - ${player.detail.TITLE}`
      : ''
    return (
      <div style={styles.root}>
        <IconButton onClick={this.toggle} disabled={!player.detail.ready}>
          {playbackIcon}
        </IconButton>
        {title}
      </div>
    )
  }
}


PlayerBar.propTypes = {
}


export default withStore(PlayerBar)
