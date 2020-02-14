import React, { Component } from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import openMap from 'react-native-open-maps'
import email from 'react-native-email'

class Infos extends React.Component {
  _goToUTT() {
    openMap({
      query:
        'Université de Technologie de Troyes, 12 Rue Marie Curie, 10430 Rosières-près-Troyes, France',
    })
  }

  handleEmailGala = () => {
    const to = ['gala@utt.fr'] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      subject: '',
      body: '',
    }).catch(console.error)
  }

  handleEmailUng = () => {
    const to = ['ung@utt.fr'] // string or array of email addresses
    email(to, {
      // Optional additional arguments
      cc: ['quentin.letellier@utt.fr'], // string or array of email addresses
      subject: '',
      body: '',
    }).catch(console.error)
  }

  render() {
    return (
      <ScrollView style={styles.main_container}>
        <View style={styles.category}>
          <View>
            <Text style={styles.title}>Accès</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-body" size={25} />
            </View>
            <Text style={styles.text}>Interdit aux moins de 18 ans</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-bowtie" size={25} />
            </View>
            <Text style={styles.text}>Tenue de soirée obligatoire</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-beer" size={25} />
            </View>
            <Text style={styles.text}>Etat convenable exigé</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>Adresse</Text>
          </View>

          <TouchableOpacity style={styles.element} onPress={this._goToUTT}>
            <View style={styles.element_icon}>
              <Icon name="ios-pin" size={25} />
            </View>
            <Text style={styles.text}>12 Rue Marie Curie, Troyes</Text>
            <View style={styles.element_arrow}>
              <Icon name="ios-arrow-forward" size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>Date</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-calendar" size={25} />
            </View>
            <Text style={styles.text}>16 Mai 2020 - 20H00</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>Horaires</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-time" size={25} />
            </View>
            <Text style={styles.text}>Ouverture à 20H00</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-warning" size={25} />
            </View>
            <Text style={styles.text}>Fermeture de l'entrée à 01H00</Text>
          </View>

          <View style={styles.element}>
            <View style={styles.element_icon}>
              <Icon name="ios-volume-high" size={25} />
            </View>
            <Text style={styles.text}>Baisse du niveau sonore à 04H30</Text>
          </View>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>
              Privacy Policy/Politique de confidentialité
            </Text>
          </View>

          <TouchableOpacity
            style={styles.element}
            onPress={() =>
              Linking.openURL('https://gala.utt.fr/confidentialite')
            }
          >
            <View style={styles.element_icon}>
              <Icon name="ios-lock" size={25} />
            </View>
            <Text style={styles.text}>See The Privacy Policy</Text>
            <View style={styles.element_arrow}>
              <Icon name="ios-arrow-forward" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.element}
            onPress={() =>
              Linking.openURL('https://gala.utt.fr/confidentialite')
            }
          >
            <View style={styles.element_icon}>
              <Icon name="ios-lock" size={25} />
            </View>
            <Text style={styles.text}>
              Voir la politique de confidentialité
            </Text>
            <View style={styles.element_arrow}>
              <Icon name="ios-arrow-forward" size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <View>
            <Text style={styles.title}>Nous contacter</Text>
          </View>

          <TouchableOpacity
            style={styles.element}
            onPress={this.handleEmailGala}
          >
            <View style={styles.element_icon}>
              <Icon name="ios-mail" size={25} />
            </View>
            <Text style={styles.text}>Association : gala@utt.fr</Text>
            <View style={styles.element_arrow}>
              <Icon name="ios-arrow-forward" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.element}
            onPress={this.handleEmailUng}
          >
            <View style={styles.element_icon}>
              <Icon name="ios-settings" size={25} />
            </View>
            <Text style={styles.text}>Problèmes Techniques : ung@utt.fr</Text>
            <View style={styles.element_arrow}>
              <Icon name="ios-arrow-forward" size={25} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Infos

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },

  category: {
    padding: 5,
    margin: 10,
    width: '95%',
    borderWidth: 2,
    flexDirection: 'column',
  },

  title: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 20,
  },

  element: {
    flexDirection: 'row',
    height: 35,
    borderTopWidth: 1,
    padding: 5,
  },

  element_icon: {
    width: '7%',
  },

  element_arrow: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    top: 5,
  },

  text: {
    marginTop: 4,
    fontSize: 15,
    marginLeft: 10,
  },
})
