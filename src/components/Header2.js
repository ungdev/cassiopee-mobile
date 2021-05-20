//Header 2 is created due to a problem with the second navigation "stack navigation" in artist bundle
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TitleText } from './TitleText'
const Device = require('react-native-device-detection')

class Header2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#094E6F' }}>
        <View style={styles.header}>
          <View style={styles.title}>
            <TitleText style={styles.designtitle}>
              {this.props.bigtitle}
            </TitleText>
          </View>
          <View style={styles.iconmenu}>
            <Icon
              name="md-arrow-back"
              style={{ fontSize: Device.isTablet ? 30 : 24, color: 'white' }}
            />
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
    height: Platform.OS === 'ios' ? 45 : 80,
  },
  iconmenu: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 10 : 45,
    left: 20,
  },
  title: {
    width: '100%',
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        marginTop: 35,
      },
    }),
  },
  designtitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'normal',
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
      top: Platform.OS === 'ios' ? 8 : 40,
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

export default Header2
