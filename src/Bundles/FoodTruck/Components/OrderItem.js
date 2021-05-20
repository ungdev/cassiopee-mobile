import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { StyledText } from '../../../components/StyledText'
import { LinearGradient } from 'expo-linear-gradient'
import i18n from '../../../translate'
const Device = require('react-native-device-detection')

export class OrderItem extends React.Component {
  render() {
    const { order, display, firstname, lastname, status } = this.props
    return (
      <TouchableOpacity style={styles.item_container}>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
          style={styles.item_container_design}
        >
          <StyledText style={styles.title_name}>
            {i18n.t('foodtruck_number_order')}
            {display}
          </StyledText>
          <StyledText style={styles.title_name}>
            {i18n.t('foodtruck_name_order')}
            {firstname}
            {''}
            {lastname}
          </StyledText>
          <View style={styles.container_infos_order}>
            <View style={{ width: '100%' }}>
              <StyledText style={styles.title_name}>
                {i18n.t('foodtruck_status_order')}
                {status}
              </StyledText>
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item_container: {
    marginBottom: '2%',
  },
  item_container_design: {
    padding: 5,
    width: '95%',
    borderColor: '#094E6F',
    flexDirection: 'column',
    borderRadius: 10,
    alignSelf: 'center',
  },
  container_infos_order: {
    flexDirection: 'row',
  },
  title_name: {
    padding: 5,
    color: '#094E6F',
    fontSize: 18,
    textAlign: 'left',
  },
})
