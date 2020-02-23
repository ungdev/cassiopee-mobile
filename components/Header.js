
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import DrawerTrigger from './DrawerTrigger'
class Header extends React.Component {

  render() {
    return (
      <View style={styles.header}>
          <DrawerTrigger/>
          <Text style={styles.designtitle}>{this.props.bigtitle}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 40,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    height: 95,
  },
  designtitle: {
    marginTop :-5,
    fontSize: 20,
    position: 'relative',
    marginLeft: 40
  }
});

export default Header;
