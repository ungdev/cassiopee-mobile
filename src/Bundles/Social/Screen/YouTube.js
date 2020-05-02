import React from 'react'
import { WebView } from 'react-native-webview'

class YouTube extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri:
            'https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g/videos',
        }}
      />
    )
  }
}

export default YouTube
