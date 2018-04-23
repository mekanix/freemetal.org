import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import Popover from 'material-ui/Popover'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Slider from 'material-ui/Slider';

import ReorderIcon from 'material-ui/svg-icons/action/reorder'
import PlayIcon from 'material-ui/svg-icons/av/play-arrow'
import StopIcon from 'material-ui/svg-icons/av/stop'
import VolumeFullIcon from 'material-ui/svg-icons/av/volume-up'
import VolumeMutedIcon from 'material-ui/svg-icons/av/volume-mute'
import VolumeHalfIcon from 'material-ui/svg-icons/av/volume-down'
import HomeIcon from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/Drawer'
import CloseIcon from 'material-ui/svg-icons/content/clear'
import Settings from '../../components/molecules/settings'
import getStyles from './styles'
import actions from './actions.js'


const mapStateToProps = (state) => ({
  settingsOpen: state.settings.open,
})


class Template extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    settingsOpen: PropTypes.bool,
    toggleSettings: PropTypes.func.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired,
  }

  static defaultProps = {
    settingsOpen: false,
  }

  state = {
    paused: true,
    time: 0.66,
    volume: 1,
    volumeAnchor: null,
    volumeShown: false,
  }

  constructor(props) {
    super(props)
    this.audio = new Audio()
    this.audio.volume = 1
    this.audio.type = 'audio/ogg'
    this.audio.src = 'http://freemetal.org:8000/'
    this.audio.volume = this.state.volume
  }

  handleHomeTouchTap = () => {
    this.context.router.history.push('/')
  }

  handleMenuClick = () => {
    this.props.close()
  }

  handlePlayToggle = () => {
    if (this.state.paused) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
    this.setState({ paused: !this.state.paused })
  }

  handleVolume = (event, volume) => {
    this.setState({ volume })
    this.audio.volume = volume
  }

  handleVolumeMenu = (event) => {
    this.setState({
      volumeAnchor: event.target,
      volumeShown: !this.state.volumeShown,
    })
  }

  componentWillMount() {
    this.props.close()
  }

  render() {
    const styles = getStyles(this.context.muiTheme)
    const ButtonIcon = this.state.paused ? PlayIcon : StopIcon
    let VolumeIcon
    if (this.state.volume > 0.66) {
      VolumeIcon = VolumeFullIcon
    } else if (this.state.volume === 0) {
      VolumeIcon = VolumeMutedIcon
    } else {
      VolumeIcon = VolumeHalfIcon
    }
    return (
      <div style={styles.root}>
        <Drawer
          openSecondary
          open={this.props.settingsOpen}
        >
          <AppBar
            title="menu"
            iconElementLeft={
              <IconButton onClick={this.handleMenuClick} >
                <CloseIcon />
              </IconButton>
            }
          />
          <Settings />
        </Drawer>
        <AppBar
          title="Free Metal"
          style={styles.header}
          iconElementLeft={
            <IconButton onTouchTap={this.handleHomeTouchTap}>
              <HomeIcon />
            </IconButton>
          }
          iconElementRight={
            <IconButton onTouchTap={this.props.toggleSettings}>
              <ReorderIcon />
            </IconButton>
          }
        />
        <div style={styles.content}>
          {this.props.children}
        </div>
        <Paper style={styles.footer}>
          <FloatingActionButton
            onClick={this.handlePlayToggle}
          >
            <ButtonIcon />
          </FloatingActionButton>
          <Slider style={styles.time} value={this.state.time} />
          <FloatingActionButton
            onClick={this.handleVolumeMenu}
          >
            <VolumeIcon />
          </FloatingActionButton>
          <Popover
            open={this.state.volumeShown}
            anchorEl={this.state.volumeAnchor}
            anchorOrigin={styles.popover.anchor}
            targetOrigin={styles.popover.target}
            onRequestClose={this.handleVolumeMenu}
          >
            <Paper style={styles.volume}>
              <Slider
                axis="y"
                style={styles.volume.slider}
                onChange={this.handleVolume}
                value={this.state.volume}
              />
            </Paper>
          </Popover>
        </Paper>
      </div>
    )
  }
}


export default connect(mapStateToProps, actions)(Template)
