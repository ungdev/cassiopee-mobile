import React from 'react'
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

class Twitter extends React.Component {
  render() {
    let JS =
      '<script type="text/javascript" src="https://platform.twitter.com/widgets.js"></script>'

    let source =
      JS +
      '<a class="twitter-timeline" data-theme="dark" href="https://twitter.com/GalaUTT?ref_src=twsrc%5Etfw">Tweets by GalaUTT</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'

    return (
      <WebView
        source={{ html: source }}
        javaScriptEnabled={true}
        style={styles.container}
      />
    )
  }
}

//dans le render je récupère le script du widget du service en question (widget twitter)
//je le charge avant d'intégrer sous forme de balise html le timeline du twitter GalaUTT
//balise fourni grâce au site publish.twitter (comme une sorte de iframe de spotify)

export default Twitter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A3D60',
    margin: -4,
  },
})
