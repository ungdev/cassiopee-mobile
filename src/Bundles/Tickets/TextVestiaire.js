import React from 'react'
import { TextInput, View, StyleSheet, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'

class TextVestiaire extends React.Component {
  state = {
    number: this.props.vestiaire,
  }

  saveData() {
    const result = this.state.number
    const action = { type: 'SET_VESTIAIRE', value: result }
    this.props.dispatch(action)
  }

  componentDidUpdate() {
    console.log('Le numéro sauvegardé est :')
    console.log(this.props.vestiaire)
  }

  render() {
    return (
      <View style={styles.container_vestiaire}>
        <Text style={styles.text_vestiaire}>
          Indiquez ici votre numéro de vestiaire :
        </Text>
        <Text style={styles.text_vestiaire_second}>
          (Vous n'aurez plus d'excuse pour l'oublier)
        </Text>
        <TextInput
          onChangeText={value => this.setState({ number: value })}
          value={this.props.vestiaire}
          onEndEditing={this.saveData()}
          placeholder="Numéro"
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

const mapStateToProps = state => {
  return {
    vestiaire: state.setVestiaire.vestiaire,
  }
}

export default connect(mapStateToProps)(TextVestiaire)
