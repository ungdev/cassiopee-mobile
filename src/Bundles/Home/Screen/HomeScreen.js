import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
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
import { TitleText } from '../../../components/TitleText'
import { StyledText } from '../../../components/StyledText'
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
          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean_fish.png')}
                />
              </View>
              <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                  <View style={styles.container_image}>
                    <Image
                      style={styles.image}
                      source={require('../../../../assets/logo_2021_dayedition.png')}
                    />
                  </View>

                  <LinearGradient
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                    style={styles.container_welcome}
                  >
                    <TitleText style={styles.welcome}>
                      {i18n.t('welcome')}
                    </TitleText>
                    <StyledText style={styles.welcome2}>
                      {i18n.t('welcome2')}
                    </StyledText>
                  </LinearGradient>

                  <LinearGradient
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                    style={styles.container_end}
                  >
                    <StyledText style={styles.text_end}>
                      {i18n.t('open_message')}
                    </StyledText>
                  </LinearGradient>

                  <LinearGradient
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                    style={styles.container_end}
                  >
                    <StyledText style={styles.text_end}>
                      {i18n.t('good_message')}
                    </StyledText>
                  </LinearGradient>

                  <View style={styles.container_button}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        Linking.openURL('https://www.billetterie.gala.utt.fr')
                      }
                    >
                      <StyledText style={styles.text}>
                        {i18n.t('billeterie_champagne')}
                      </StyledText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        this.props.navigation.navigate('Food_Truck')
                      }
                    >
                      <StyledText style={styles.text}>
                        {i18n.t('restauration_link')}
                      </StyledText>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <Header bigtitle={i18n.t('menu_home')} />

          <SafeAreaView style={styles.droidSafeArea}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={['#22749C', '#43B9D5']}
            >
              <View style={styles.containerBottomImage}>
                <Image
                  style={styles.bottomImage}
                  source={require('../../../../assets/bottom_ocean_fish.png')}
                />
              </View>
              <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                  <View style={styles.container_image}>
                    <Image
                      style={styles.image}
                      source={require('../../../../assets/logo_2021_dayedition.png')}
                    />
                  </View>

                  <LinearGradient
                    start={[0, 1]}
                    end={[1, 0]}
                    colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                    style={styles.container_welcome}
                  >
                    <TitleText style={styles.welcome}>
                      {i18n.t('welcome')}
                    </TitleText>
                    <StyledText style={styles.welcome2}>
                      {i18n.t('welcome2')}
                    </StyledText>
                  </LinearGradient>

                  <View style={styles.container_countdown}>
                    <LinearGradient
                      style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: 'transparent',
                      }}
                      start={[0, 1]}
                      end={[1, 0]}
                      colors={[
                        'rgb(198, 233, 250)',
                        'rgba(198, 233, 250, 0.6)',
                      ]}
                    >
                      <CountDown
                        digitStyle={{ backgroundColor: 'transparrent' }}
                        digitTxtStyle={{ color: '#094E6F' }}
                        separatorStyle={{ color: 'transparent' }}
                        showSeparator
                        timeLabels={{
                          d: i18n.t('days'),
                          h: i18n.t('hours'),
                          m: i18n.t('minutes'),
                          s: i18n.t('seconds'),
                        }}
                        timeLabelStyle={{ color: '#094E6F' }}
                        until={this.state.totalDuration}
                        timetoShow={('D', 'H', 'M', 'S')}
                        size={Device.isTablet ? 36 : 28}
                      />
                    </LinearGradient>
                  </View>
                  <View style={styles.container_button}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        Linking.openURL('https://www.billetterie.gala.utt.fr')
                      }
                    >
                      <StyledText style={styles.text}>
                        {i18n.t('billeterie_champagne')}
                      </StyledText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() =>
                        this.props.navigation.navigate('Food_Truck')
                      }
                    >
                      <StyledText style={styles.text}>
                        {i18n.t('restauration_link')}
                      </StyledText>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </LinearGradient>
          </SafeAreaView>
        </React.Fragment>
      )
    }
  }

  componentDidMount() {
    var that = this
    var date = moment().utcOffset('+2').format('YYYY-MM-DD hh:mm:ss')
    //Getting the current date-time with required formate and UTC
    var expirydate = '2021-06-04 15:00:00' //Date of event
    var diffr = moment.duration(moment(expirydate).diff(moment(date)))
    var hours = parseInt(diffr.asHours()) + 10 //add +12 sometimes
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
    height: Dimensions.get('window').height < 600 ? 120 : 180,
    resizeMode: 'contain',
  },
  container_countdown: {
    width: '95.7%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    marginBottom: '5%',
  },
  container_welcome: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    width: '93%',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '5%',
  },
  welcome: {
    padding: 10,
    fontSize: 28,
    textAlign: 'center',
    color: '#094E6F',
  },
  welcome2: {
    padding: 10,
    fontSize: 24,
    textAlign: 'center',
    color: '#094E6F',
  },
  button: {
    padding: 5,
    width: '44%',
    marginHorizontal: '1.2%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#094E6F',
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    padding: 8,
  },
  container_end: {
    width: '90%',
    padding: 5,
    borderRadius: 10,
    marginBottom: '5%',
  },
  text_end: {
    textAlign: 'center',
    fontSize: 20,
    color: '#094E6F',
    padding: 10,
  },
  droidSafeArea: {
    flex:
      (Platform.OS === 'android' ? 1 : 1) ||
      (Dimensions.get('screen').height < 600 ? 1 : 1),
    backgroundColor: '#0A3D60',
  },
  container_button: {
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  containerBottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '18%',
    width: '100%',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: (Dimensions.get('screen').height * 17) / 100,
    width: Dimensions.get('screen').width,
    resizeMode: 'cover',
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
      width: '90%',
      marginBottom: '5%',
    },
    container_welcome: {
      width: '90%',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: '5%',
    },
    welcome: {
      fontWeight: 'bold',
      padding: 5,
      fontSize: 37,
      textAlign: 'center',
      color: '#094E6F',
    },
    welcome2: {
      padding: 5,
      fontSize: 25,
      textAlign: 'center',
      color: '#094E6F',
    },

    text: {
      color: 'white',
      fontSize: 25,
    },
    container_end: {
      width: '90%',
      padding: 5,
      borderRadius: 10,
      marginBottom: '5%',
    },
    text_end: {
      fontSize: 22,
      color: '#094E6F',
      padding: 10,
      textAlign: 'center',
    },
  })
}
