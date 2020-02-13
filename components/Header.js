import React from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
class Header extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'red' }}>
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
    marginTop: 15,
    width: '100%',
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  iconmenu: {
    position: 'absolute',
    top: 5,
    left: 20,
  },
  title: {
    width: '100%',
    justifyContent: 'center',
  },
  designtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Header
