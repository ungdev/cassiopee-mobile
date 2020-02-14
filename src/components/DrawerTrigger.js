import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { withNavigation } from 'react-navigation'
import { DrawerActions } from 'react-navigation-drawer'

class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer())
        }}
      >
        <Icon name="menu" size={26} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  trigger: {
    width: 45,
    height: 45,
  },
})

export default withNavigation(DrawerTrigger)
