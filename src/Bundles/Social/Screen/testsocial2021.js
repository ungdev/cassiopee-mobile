'snapchat://add/quent14'
'instagram://cassiopee_galautt'
'YouTube://channel/UCLprjLc5CJMNUjSolrTyu4g'
'fb://gala.utt'

import React, { useCallback } from 'react'
import { Alert, Button, Linking, StyleSheet, View } from 'react-native'

const supportedURL = 'fb://gala.utt'

const unsupportedURL = 'fb://gala.utt'

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Linking.openURL('https://www.facebook.com/gala.utt')
    }
  }, [url])

  return <Button title={children} onPress={handlePress} />
}

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

export default App
