import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import i18n from '../../translate/index'

class TextVestiaire extends React.Component {
  state = {
    number: this.props.vestiaire,
  }

  saveData() {
    const result = this.state.number
    const action = { type: 'SET_VESTIAIRE', value: result }
    this.props.dispatch(action)
  }

  render() {
    return (
      <View style={styles.container_vestiaire}>
        <Text style={styles.text_vestiaire}>
          {i18n.t('ticket_locker_room_title')}
        </Text>
        <Text style={styles.text_vestiaire_second}>
          {i18n.t('ticket_locker_room_message')}
        </Text>
        <TextInput
          onChangeText={(value) => this.setState({ number: value })}
          value={this.props.vestiaire}
          onEndEditing={this.saveData()}
          placeholder={i18n.t('ticket_number')}
          keyboardType="number-pad"
          selectTextOnFocus
          textAlign="center"
          style={styles.input}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container_vestiaire: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_vestiaire: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  text_vestiaire_second: {
    fontSize: 14,
    marginBottom: 30,
    color: 'white',
  },
  input: {
    borderRadius: 8,
    fontSize: 35,
    fontWeight: 'bold',
    width: 250,
    height: 64,
    padding: 10,
    marginBottom: 7,
    backgroundColor: '#bd945a',
    color: 'white',
  },
})

const mapStateToProps = (state) => {
  return {
    vestiaire: state.setVestiaire.vestiaire,
  }
}

export default connect(mapStateToProps)(TextVestiaire)
