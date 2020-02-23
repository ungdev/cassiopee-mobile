import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native'
import Header from '../../../components/Header'
import CountDown from 'react-native-countdown-component'
//import CountDown to show the time
import moment from 'moment'
//import moment to help you play with date and time

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalDuration: '',
    }
  }

  render() {
    const x = this.state.totalDuration
    console.log(x)
    if (x <= 0) {
      return (
        <React.Fragment>
          <Header bigtitle="Accueil" />

          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
              <View style={styles.container_image}>
                <Image
                  style={styles.image}
                  source={require('../../../images/panneau.png')}
                />
              </View>

              <View style={styles.container_welcome}>
                <Text style={styles.welcome}>
                  Bienvenue sur l'application{'\n'}Cassiopée Gala !
                </Text>
                <Text style={styles.welcome}>
                  L'événement ouvre ses portes{'\n'}le 16 Mai 2020.
                </Text>
              </View>

              <View style={styles.container_end}>
                <Text style={styles.text_end}>
                  Le Gala a ouvert ses porte !
                </Text>
              </View>
              <View style={styles.container_end}>
                <Text style={styles.text_end}>
                  Nous vous souhaitons une bonne soirée.
                </Text>
              </View>
            </View>
          </ScrollView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle="Accueil" />

          <ScrollView style={styles.scroll}>
            <View style={styles.container}>
              <View style={styles.container_image}>
                <Image
                  style={styles.image}
                  source={require('../../../images/panneau.png')}
                />
              </View>

              <View style={styles.container_welcome}>
                <Text style={styles.welcome}>
                  Bienvenue sur l'application{'\n'}Cassiopée Gala !
                </Text>
                <Text style={styles.welcome}>
                  L'événement ouvre ses portes{'\n'}le 16 Mai 2020.
                </Text>
              </View>

              <View style={styles.container_countdown}>
                <CountDown
                  digitStyle={{ backgroundColor: 'whitesmoke' }}
                  separatorStyle={{ color: 'whitesmoke' }}
                  showSeparator
                  timeLabels={{
                    d: 'Jours',
                    h: 'Heures',
                    m: 'Minutes',
                    s: 'Secondes',
                  }}
                  until={this.state.totalDuration}
                  timetoShow={('D', 'H', 'M', 'S')}
                  size={28}
                />
              </View>

              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => Linking.openURL('https://www.apple.com/fr/')}
                >
                  <Text style={styles.text}>Prendre sa Place</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </React.Fragment>
      )
    }
  }

  componentDidMount() {
    var that = this
    var date = moment()
      .utcOffset('+1')
      .format('YYYY-MM-DD hh:mm:ss')
    //Getting the current date-time with required formate and UTC
    var expirydate = '2020-05-16 20:00:00' //Date of event
    var diffr = moment.duration(moment(expirydate).diff(moment(date)))
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours()) - 11
    var minutes = parseInt(diffr.minutes())
    var seconds = parseInt(diffr.seconds())
    var d = hours * 60 * 60 + minutes * 60 + seconds
    //converting in seconds
    that.setState({ totalDuration: d })
    that.setState({ heure: hours })
    that.setState({ minute: minutes })
    that.setState({ seconde: seconds })
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'whitesmoke',
  },
  container: {
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_image: {
    alignItems: 'center',
    width: '100%',
  },

  image: {
    marginTop: 15,
    width: 320,
    height: 200,
  },
  container_countdown: {
    margin: 10,
    padding: 5,
    borderWidth: 3,
  },
  container_welcome: {
    width: '90%',
    borderWidth: 3,
    marginTop: 20,
    margin: 5,
    alignItems: 'center',
  },
  welcome: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
    padding: 16,
    width: 200,
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container_end: {
    marginTop: 20,
    padding: 5,
    borderWidth: 3,
  },
  text_end: {
    fontSize: 18,
  },
})
