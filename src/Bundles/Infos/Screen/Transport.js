import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native'
import Accordion from '../Accordion/Accordion.js'

class Navettes extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main_container}>
        <Text style={styles.t}>En Navettes</Text>
        <View style={styles.container}>
          <Text style={{ textAlign: 'justify' }}>
            Avant 21H30, le service de transport régulier de la TCAT peut-être
            utilisé, moyennant le prix d'un ticket par personne.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ textAlign: 'justify' }}>
            A partir de 21H30, une navette gratuite est mise en place entre le
            rond-point de Beurnonville (proche du centre des finances publiques
            et du CNAM) et le parking de l'UTT.{'\n'}Consultez les horaires
            ci-dessous.
          </Text>
        </View>
        <Accordion />
        <Text style={styles.t}>En Voiture</Text>
        <View style={styles.container}>
          <Text style={{ textAlign: 'justify' }}>
            Depuis Paris{'\n'} - Autoroute A5 : sortie n°20 (Sainte Savine)
            {'\n'} - N60 direction Troyes {'\n'} - Rocade de contournement{'\n'}
            - Suivre Technopole de l’Aube{'\n'}
            {'\n'}Depuis Reims{'\n'} - Autoroute A26 : sortie n°21 (Saint
            Thibault){'\n'} - N71 direction Troyes{'\n'} - Rocade de
            contournement{'\n'} - Suivre Technopole de l’Aube{'\n'}
            {'\n'}Depuis Dijon{'\n'} - Autoroute A5 : sortie n°21 (Saint
            Thibault){'\n'} - N71 direction Troyes{'\n'} - Rocade de
            contournement{'\n'} - Suivre Technopole de l’Aube{'\n'}
            {'\n'}Un parking d’une centaine de places est disponible à proximité
            de l’UTT pour les personnes arrivant en voiture.
          </Text>
        </View>
        <Text style={styles.t}>En Train</Text>
        <View style={styles.container}>
          <Text style={{ textAlign: 'justify' }}>
            Depuis Paris : TER Gare de l’Est vers Troyes
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default Navettes

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  container: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  t: {
    marginTop: 15,
    color: '#f05635',
    fontSize: 25,
    textAlign: 'center',
  },
})
