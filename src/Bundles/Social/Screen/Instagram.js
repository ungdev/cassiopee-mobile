import React from 'react'
import { WebView } from 'react-native-webview'

class Instagram extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://www.instagram.com/cassiopee_galautt/' }}
      />
    )
  }
}

export default Instagram
