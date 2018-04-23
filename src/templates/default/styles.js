export default (theme) => {
  const headerFooter = 2 * theme.appBar.height
  const height = `calc(100vh - ${headerFooter}px)`
  const timeWidth = 40 + 2 * theme.floatingActionButton.buttonSize + 40
  const styles = {
    content: {
      width: '100%',
      minHeight: height,
      height: height,
      marginTop: theme.appBar.height,
      marginBottom: theme.appBar.height,
    },

    header: {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
    },

    footer: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      height: theme.appBar.height,
      width: '100%',
      paddingLeft: 20,
      paddingRight: 20,
    },

    time: {
      width: `calc(100vw - ${timeWidth}px)`,
      display: 'inline-block',
      height: theme.floatingActionButton.buttonSize + 1,
      marginLeft: 20,
      marginRight: 20,
    },

    volume: {
      height: 150,
      slider: {
        height: 100,
      },
    },

    popover: {
      anchor: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      target: {
        horizontal: 'left',
        vertical: 'top',
      },
    },
  }
  return styles
}
