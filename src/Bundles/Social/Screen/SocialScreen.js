import React, { Component } from 'react'
import Header from '../../../components/Header'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from 'react-native'
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
                  <View style={styles.social}>
                    <Icon
                      name="facebook"
                      type="font-awesome-5"
                      color="#094E6F"
                      size={Device.isTablet ? 250 : 150}
                      onPress={() =>
                        Linking.openURL('https://www.facebook.com/gala.utt')
                      }
                    />
                  </View>
                  <View style={styles.social}>
                    <Icon
                      name="instagram"
                      type="font-awesome"
                      color="#094E6F"
                      size={Device.isTablet ? 250 : 150}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.instagram.com/cassiopee_galautt/'
                        )
                      }
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <TitleText style={styles.social_name}>@gala.utt</TitleText>
                  <TitleText style={styles.social_name}>
                    cassiopee_galautt
                  </TitleText>
                </View>

                <View style={styles.row}>
                  <View style={styles.social}>
                    <Icon
                      name="twitter"
                      type="font-awesome"
                      color="#094E6F"
                      size={Device.isTablet ? 250 : 150}
                      onPress={() =>
                        Linking.openURL('https://twitter.com/GalaUTT')
                      }
                    />
                  </View>
                  <View style={styles.social}>
                    <Icon
                      name="youtube-play"
                      type="font-awesome"
                      color="#094E6F"
                      size={Device.isTablet ? 250 : 130}
                      onPress={() =>
                        Linking.openURL(
                          'https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g'
                        )
                      }
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <TitleText style={styles.social_name}>@GalaUTT</TitleText>
                  <TitleText style={styles.social_name}>Gala UTT</TitleText>
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
  social: {
    width: '50%',
  },
  follow: {
    color: '#094E6F',
    fontSize: 28,
    marginBottom: 30,
    marginTop: 25,
    width: '100%',
    textAlign: 'center',
  },
  social_name: {
    width: '50%',
    fontSize: 28,
    color: '#094E6F',
    textAlign: 'center',
    marginBottom: 20,
  },
  social_name_bas: {
    width: '50%',
    fontSize: 28,
    color: '#094E6F',
    textAlign: 'center',
  },
})

export default SocialScreen
