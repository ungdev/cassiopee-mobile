//Header 2 is created due to a problem with the second navigation "stack navigation" in artist bundle
import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Header2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#171530' }}>
        <View style={styles.header}>
          <View style={styles.title}>
            <Text style={styles.designtitle}>{this.props.bigtitle}</Text>
          </View>
          <View style={styles.iconmenu}>
            <Icon
              name="md-arrow-back"
              style={{ fontSize: 24, color: 'white' }}
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

export default Header2
