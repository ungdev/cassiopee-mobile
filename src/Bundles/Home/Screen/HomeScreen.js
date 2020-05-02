import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
  Dimensions,
} from 'react-native'
import Header from '../../../components/Header'
import CountDown from 'react-native-countdown-component'
import moment from 'moment'
import i18n from '../../../translate/index'

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
          <Header bigtitle={i18n.t('menu_home')} />

          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <ScrollView style={styles.scroll}>
              <View style={styles.container}>
                <View style={styles.container_image}>
                  <Image
                    style={styles.image}
                    source={require('../../../images/Logo_Cassiopée/LogoClair.png')}
                  />
                </View>

                <View style={styles.container_welcome}>
                  <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
                  <Text style={styles.welcome}>{i18n.t('welcome2')}</Text>
                </View>

                <View style={styles.container_end}>
                  <Text style={styles.text_end}>{i18n.t('open_message')}</Text>
                </View>
                <View style={styles.container_end}>
                  <Text style={styles.text_end}>{i18n.t('good_message')}</Text>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_home')} />
          <SafeAreaView style={styles.droidSafeArea}>
            <ImageBackground
              source={require('../../../images/background_cassiopee_modif.png')}
              style={{ width: '100%', height: '100%' }}
            >
              <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                  <View style={styles.container_image}>
                    <Image
                      style={styles.image}
                      source={require('../../../images/Logo_Cassiopée/LogoClair.png')}
                    />
                  </View>

                  <View style={styles.container_welcome}>
                    <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
                    <Text style={styles.welcome}>{i18n.t('welcome2')}</Text>
                  </View>

                  <View style={styles.container_countdown}>
                    <CountDown
                      digitStyle={{ backgroundColor: 'transparrent' }}
                      digitTxtStyle={{ color: 'white' }}
                      separatorStyle={{ color: 'transparent' }}
                      showSeparator
                      timeLabels={{
                        d: i18n.t('days'),
                        h: i18n.t('hours'),
                        m: i18n.t('minutes'),
                        s: i18n.t('seconds'),
                      }}
                      timeLabelStyle={{ color: 'white' }}
                      until={this.state.totalDuration}
                      timetoShow={('D', 'H', 'M', 'S')}
                      size={28}
                    />
                  </View>

                  <View>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.billetweb.fr/cassiopee-gala-utt'
                        )
                      }
                    >
                      <Text style={styles.text}>{i18n.t('take_place')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }

  componentDidMount() {
    var that = this
    var date = moment().utcOffset('+1').format('YYYY-MM-DD hh:mm:ss')
    //Getting the current date-time with required formate and UTC
    var expirydate = '2020-05-16 20:00:00' //Date of event
    var diffr = moment.duration(moment(expirydate).diff(moment(date)))
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours()) - 12
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
    backgroundColor: 'transparent',
    height: '100%',
  },
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_image: {
    alignItems: 'center',
    width: '100%',
  },

  image: {
    marginTop: 0,
    width: 320,
    height: Dimensions.get('screen').height < 600 ? 100 : 180,
    resizeMode: 'contain',
  },
  container_countdown: {
    margin: 10,
    marginTop: 30,
    padding: 5,
    borderWidth: 3,
    borderColor: 'white',
  },
  container_welcome: {
    width: '90%',
    borderWidth: 3,
    borderColor: 'white',
    marginTop: 20,
    margin: 5,
    alignItems: 'center',
  },
  welcome: {
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    marginTop: 18,
    padding: 16,
    width: 200,
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: '#171530',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container_end: {
    marginTop: 40,
    padding: 5,
    borderWidth: 3,
    borderColor: 'white',
  },
  text_end: {
    fontSize: 18,
    color: 'white',
  },
  droidSafeArea: {
    flex:
      (Platform.OS === 'android' ? 1 : 0) ||
      (Dimensions.get('screen').height < 600 ? 1 : 0),
    backgroundColor: '#171530',
  },
})
