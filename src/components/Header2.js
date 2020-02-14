import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Header2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: 'red' }}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.designtitle}>{this.props.bigtitle}</Text>
          </View>
          <View style={styles.iconmenu}>
            <Icon name="md-arrow-back" style={{ fontSize: 24 }} />
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

export default Header2
