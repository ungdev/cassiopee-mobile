import React from 'react'
import { Linking, ScrollView, StyleSheet, Text } from 'react-native'

class Reglement extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h}>Sécurité</Text>
        <Text style={styles.p}>
          Pour des raisons de sécurité évidentes et un raison du plan VIGIPIRATE "SECURITE RENFORCEE - RISQUE ATTENTAT", nous vus rappelons que sont strictement INTERDITS"
        </Text>
        <Text style={styles.p}>
          ddddddddddddddddddddddddddddddd
        </Text>
        <Text style={styles.p}>
          sssssssssssssssssssssssss
        </Text>
        <Text style={styles.p}>
          ggggggggggggggggggg
        </Text>
        <Text style={styles.h}>Boissons</Text>
        <Text style={styles.p}>
          blalalbabalblablllallaal
          </Text>
        <Text style={styles.h}>Alcoolémie</Text>
        <Text style={styles.p}>
          ballablablablablzablzbllbzlbalblblabla
        </Text>
        <Text style={styles.p}>
          ahvhsbzodubzubfoebfeobeofbv
        </Text>
        <Text style={styles.p}>
        zvfizufizvfiz
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5
  },
  p: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 15,
    textAlign: 'justify'
  },
  h: {
    marginTop: 20,
    padding: 5,
    color: '#ee7b0b',
    fontSize: 20,
    textAlign: 'left',
  },
  title: {
    fontSize: 20
  },
  link: {
    color: '#00b5ec'
  }
})

export default Reglement
