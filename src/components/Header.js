import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import { theme } from '../theme'
const HEIGHT = 40
class Header extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{ backgroundColor: theme.colors.header.backgroundColor }}
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
    marginTop: theme.spacing.unit * 4,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: HEIGHT,
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
