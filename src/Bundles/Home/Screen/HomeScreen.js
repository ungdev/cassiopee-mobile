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
  Platform,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../../../components/Header'
import CountDown from 'react-native-countdown-component'
import moment from 'moment'
import i18n from '../../../translate/index'
import { connect } from 'react-redux'
const Device = require('react-native-device-detection')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalDuration: '',
    }
  }

  render() {
    const x = this.state.totalDuration
    console.log('token stocké', this.props.keyToken)
    if (x <= 0) {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_home')} />

          <ImageBackground
            source={require('../../../../assets/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <ScrollView style={styles.scroll}>
              <View style={styles.container}>
                <View style={styles.container_image}>
                  <Image
                    style={styles.image}
                    source={require('../../../../assets/Logo_2021.png')}
                  />
                </View>

                <LinearGradient
                  start={[0, 1]}
                  end={[1, 0]}
                  colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                  style={styles.container_welcome}
                >
                  <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
                  <Text style={styles.welcome2}>{i18n.t('welcome2')}</Text>
                </LinearGradient>

                <LinearGradient
                  start={[0, 1]}
                  end={[1, 0]}
                  colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                  style={styles.container_end}
                >
                  <Text style={styles.text_end}>{i18n.t('open_message')}</Text>
                </LinearGradient>

                <LinearGradient
                  start={[0, 1]}
                  end={[1, 0]}
                  colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                  style={styles.container_end}
                >
                  <Text style={styles.text_end}>{i18n.t('good_message')}</Text>
                </LinearGradient>

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
              source={require('../../../../assets/background_cassiopee_modif.png')}
              style={{ width: '100%', height: '100%' }}
            >
              <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                  <View style={styles.container_image}>
                    <Image
                      style={styles.image}
                      source={require('../../../../assets/Logo_2021.png')}
                    />
                  </View>

                  <LinearGradient
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                    style={styles.container_welcome}
                  >
                    <Text style={styles.welcome}>{i18n.t('welcome')}</Text>
                    <Text style={styles.welcome2}>{i18n.t('welcome2')}</Text>
                  </LinearGradient>

                  <View style={styles.container_countdown}>
                    <LinearGradient
                      start={[0, 1]}
                      end={[1, 0]}
                      colors={[
                        'rgb(198, 233, 250)',
                        'rgba(198, 233, 250, 0.6)',
                      ]}
                    >
                      <CountDown
                        digitStyle={{ backgroundColor: 'transparrent' }}
                        digitTxtStyle={{ color: '#0A3D60' }}
                        separatorStyle={{ color: 'transparent' }}
                        showSeparator
                        timeLabels={{
                          d: i18n.t('days'),
                          h: i18n.t('hours'),
                          m: i18n.t('minutes'),
                          s: i18n.t('seconds'),
                        }}
                        timeLabelStyle={{ color: '#0A3D60' }}
                        until={this.state.totalDuration}
                        timetoShow={('D', 'H', 'M', 'S')}
                        size={Device.isTablet ? 36 : 28}
                      />
                    </LinearGradient>
                  </View>

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
    var expirydate = '2021-06-04 20:00:00' //Date of event
    var diffr = moment.duration(moment(expirydate).diff(moment(date)))
    var hours = parseInt(diffr.asHours()) + 12 //add +12 sometimes
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

const mapStateToProps = (state) => {
  return {
    keyToken: state.setkeyToken.keyToken,
  }
}

export default connect(mapStateToProps)(HomeScreen)

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'transparent',
    height: '100%',
  },
  container: {
    width: '100%',
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
    width: Dimensions.get('window').height < 600 ? 280 : 320,
    height: Dimensions.get('window').height < 600 ? 120 : 210,
    resizeMode: 'contain',
  },
  container_countdown: {
    width: '92%',
    margin: 10,
    marginTop: 25,
    padding: 5,
  },
  container_welcome: {
    width: '90%',
    margin: 10,
    marginTop: Dimensions.get('window').height < 600 ? 15 : 20,
    alignItems: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 22,
    textAlign: 'center',
    color: '#0A3D60',
  },
  welcome2: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#0A3D60',
  },
  button: {
    marginTop: 18,
    padding: 16,
    width: '90%',
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#0A3D60',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  container_end: {
    width: '90%',
    marginTop: Dimensions.get('window').height < 600 ? 15 : 30,
    marginBottom: Dimensions.get('window').height < 600 ? 10 : 15,
    padding: 5,
  },
  text_end: {
    textAlign: 'center',
    fontSize: 18,
    color: '#0A3D60',
    padding: 10,
  },
  droidSafeArea: {
    flex:
      (Platform.OS === 'android' ? 1 : 0) ||
      (Dimensions.get('screen').height < 600 ? 1 : 0),
    backgroundColor: '#0A3D60',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    image: {
      marginTop: 0,
      width: 520,
      height: 300,
      resizeMode: 'contain',
    },
    container_countdown: {
      width: '96%',
      margin: 10,
      marginTop: 45,
      padding: 25,
    },
    container_welcome: {
      width: '90%',
      marginTop: 20,
      margin: 5,
      alignItems: 'center',
    },
    welcome: {
      fontWeight: 'bold',
      padding: 5,
      fontSize: 25,
      textAlign: 'center',
      color: '#0A3D60',
    },
    welcome2: {
      padding: 5,
      fontSize: 25,
      textAlign: 'center',
      color: '#0A3D60',
    },
    button: {
      marginTop: 43,
      padding: 16,
      width: '90%',
      borderRadius: 0,
      alignItems: 'center',
      backgroundColor: '#0A3D60',
    },
    text: {
      color: 'white',
      fontSize: 25,
    },
    container_end: {
      width: '90%',
      marginTop: 40,
      marginBottom: 15,
      padding: 5,
    },
    text_end: {
      fontSize: 22,
      color: '#0A3D60',
      padding: 10,
      textAlign: 'center',
    },
  })
}
