import React from 'react'
import { TextInput, View, StyleSheet, Text, AsyncStorage } from 'react-native'

export default class TextVestiaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberticket: '',
    }
  }

  saveData() {
    const numberticket = this.state.numberticket
    AsyncStorage.setItem('numberticket', numberticket)
    console.log('stockage ' + numberticket)
  }

  render() {
    console.log('default: ' + this.state.numberticket)

    return (
      <View style={styles.container_vestiaire}>
        <Text style={styles.text_vestiaire}>
          Indiquez ici votre numéro de vestiaire :
        </Text>
        <Text style={styles.text_vestiaire_second}>
          (Vous n'aurez plus d'excuse pour l'oublier)
        </Text>
        <TextInput
          value={AsyncStorage.getItem('numberticket')}
          onChangeText={numberticket => {
            this.setState({ numberticket })
          }}
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
    backgroundColor: '#ffffff',
  },
  text_vestiaire: {
    fontSize: 18,
  },
  text_vestiaire_second: {
    fontSize: 14,
    marginBottom: 30,
  },
  input: {
    fontSize: 35,
    fontWeight: 'bold',
    width: 250,
    height: 64,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },
})
