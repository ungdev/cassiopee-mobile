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
              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
                style={styles.column}
              >
                <TitleText style={styles.follow}>
                  {i18n.t('follow_us')}
                </TitleText>

                <View style={styles.row}>
                  <Icon
                    name="facebook"
                    type="font-awesome-5"
                    color="#094E6F"
                    size={Device.isTablet ? 250 : 150}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL('https://www.facebook.com/gala.utt')
                    }
                  />
                  <Icon
                    name="instagram"
                    type="font-awesome"
                    color="#094E6F"
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
                    color="#094E6F"
                    size={Device.isTablet ? 250 : 150}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL('https://twitter.com/GalaUTT')
                    }
                  />
                  <Icon
                    name="youtube-play"
                    type="font-awesome"
                    color="#094E6F"
                    size={Device.isTablet ? 250 : 130}
                    iconStyle={styles.icon}
                    onPress={() =>
                      Linking.openURL(
                        'https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g'
                      )
                    }
                  />
                </View>
              </LinearGradient>
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
    width: '94%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
  },
  icon: {
    margin: 15,
  },
  follow: {
    color: '#094E6F',
    fontSize: 28,
    marginBottom: 30,
    marginTop: 25,
    width: '100%',
    textAlign: 'center',
  },
})

export default SocialScreen
