import React, { Component } from 'react'
import Header from '../../../components/Header'
import { SafeAreaView, View, StyleSheet, Image, Dimensions } from 'react-native'
import i18n from '../../../translate/index'
import { Icon } from 'react-native-elements'
import { Linking } from 'react-native'
import Device from 'react-native-device-detection'
import { LinearGradient } from 'expo-linear-gradient'
import { TitleText } from '../../../components/TitleText'

class SocialScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header bigtitle={i18n.t('menu_social')} />
        <SafeAreaView
          style={{
            backgroundColor: '#0A3D60',
            flex: 1,
          }}
        >
          <LinearGradient
            style={{ height: '100%' }}
            start={[0, 1]}
            end={[1, 0]}
            colors={['#22749C', '#43B9D5']}
          >
            <View style={styles.containerBottomImage}>
              <Image
                style={styles.bottomImage}
                source={require('../../../../assets/bottom_ocean.png')}
              />
            </View>
            <View style={styles.mainContainer}>
              <TitleText style={styles.follow}>{i18n.t('follow_us')}</TitleText>
              <View style={styles.column}>
                <View style={styles.row}>
                  <Icon
                    name="facebook"
                    type="font-awesome-5"
                    color="#1977f3"
                    size={Device.isTablet ? 250 : 150}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL('https://www.facebook.com/gala.utt')
                    }
                  />
                  <Icon
                    name="instagram"
                    type="font-awesome"
                    color="whitesmoke"
                    size={Device.isTablet ? 250 : 150}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.instagram.com/cassiopee_galautt/'
                      )
                    }
                  />
                </View>
                <View style={styles.row}>
                  <Icon
                    name="twitter"
                    type="font-awesome"
                    color="#1da1f2"
                    size={Device.isTablet ? 250 : 150}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL('https://twitter.com/GalaUTT')
                    }
                  />
                  <Icon
                    name="youtube-play"
                    type="font-awesome"
                    color="#c00"
                    size={Device.isTablet ? 250 : 130}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g'
                      )
                    }
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    padding: 10,
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 15,
  },
  follow: {
    color: 'white',
    fontSize: 28,
    marginBottom: '5%',
  },
})

export default SocialScreen
