import React, { Component } from 'react'
import Header from '../../../components/Header'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import i18n from '../../../translate/index'
import { Icon } from 'react-native-elements'
import { Linking } from 'react-native'
import Device from 'react-native-device-detection'

class SocialScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <SafeAreaView
          style={{
            backgroundColor: '#094E6F',
            flex: 1,
          }}
        >
          <Header bigtitle={i18n.t('menu_social')} />
          <View style={styles.mainContainer}>
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
                  onPress={() => Linking.openURL('https://twitter.com/GalaUTT')}
                />
                <Icon
                  name="youtube-play"
                  type="font-awesome"
                  color="#c00"
                  size={Device.isTablet ? 250 : 140}
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
  },
  icon: {
    margin: 15,
  },
})

export default SocialScreen
