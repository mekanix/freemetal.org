import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Template from '../../templates/default'
import getStyles from './styles'


class Landing extends React.Component {
  render() {
    const styles = getStyles(this.context.muiTheme)
    return (
      <Template>
        <Paper style={styles.content}>
          Landing
        </Paper>
      </Template>
    )
  }
}


Landing.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
}


export default Landing
