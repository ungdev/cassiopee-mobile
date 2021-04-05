import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import { TitleText } from './TitleText'
const Device = require('react-native-device-detection')

class Header extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#0A3D60',
        }}
      >
        <View style={styles.header}>
          <View style={styles.title}>
            <TitleText style={styles.designtitle}>
              {this.props.bigtitle}
            </TitleText>
          </View>
          <View style={styles.iconmenu}>
            <DrawerTrigger />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 45 : 70,
  },
  iconmenu: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 10 : 35,
    left: 20,
  },
  title: {
    width: '100%',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        marginTop: 25,
      },
    }),
  },
  designtitle: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'normal',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    header: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: Platform.OS === 'ios' ? 45 : 85,
    },
    iconmenu: {
      position: 'absolute',
      top: Platform.OS === 'ios' ? 10 : 40,
      left: 20,
    },
    title: {
      width: '100%',
      ...Platform.select({
        ios: {
          justifyContent: 'center',
        },
        android: {
          marginTop: 18,
        },
      }),
    },
    designtitle: {
      fontSize: 28,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
  })
}

export default Header
