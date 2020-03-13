import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Accordion from '../Accordion/Accordion.js'

class Transports extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main_container}>
        <Text style={styles.title}>En Navettes</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            Avant 21H30, le service de transport régulier de la TCAT peut-être
            utilisé, moyennant le prix d'un ticket par personne.
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            A partir de 21H30, une navette gratuite est mise en place entre le
            rond-point de Beurnonville (proche du centre des finances publiques
            et du CNAM) et le parking de l'UTT.{'\n'}Consultez les horaires
            ci-dessous.
          </Text>
        </View>
        <Accordion />
        <Text style={styles.title}>En Voiture</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            Depuis Paris{'\n'} - Autoroute A5 : sortie n°20 (Sainte Savine)
            {'\n'} - N60 direction Troyes {'\n'} - Rocade de contournement
            {'\n'}- Suivre Technopole de l’Aube{'\n'}
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
        <Text style={styles.title}>En Train</Text>
        <View style={styles.container}>
          <Text style={styles.paragraphe}>
            Depuis Paris : TER Gare de l’Est vers Troyes.
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default Transports

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    borderWidth: 2,
    borderColor: 'whitesmoke',
    borderRadius: 10,
    padding: 10,
    margin: 15,
  },
  title: {
    marginTop: 15,
    color: '#bd945a',
    fontSize: 25,
    textAlign: 'center',
  },
  paragraphe: {
    textAlign: 'justify',
    color: 'whitesmoke',
  },
})
