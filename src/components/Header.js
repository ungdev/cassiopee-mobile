import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
const Device = require('react-native-device-detection')

class Header extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#171530',
        }}
      >
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.designtitle}>{this.props.bigtitle}</Text>
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
    height: Platform.OS === 'ios' ? 45 : 65,
  },
  iconmenu: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 10 : 30,
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
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
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
      top: Platform.OS === 'ios' ? 20 : 40,
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
      fontSize: 21,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
  })
}

export default Header
