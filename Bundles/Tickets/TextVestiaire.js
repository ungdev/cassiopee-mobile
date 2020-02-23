import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

export default class TextVestiaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'Numéro ',
    };
  }


  _toggleFavorite() {
    const action = { type: "TOGGLE_NUMBER", value: this.state.username }
    this.props.dispatch(action)
  }


  render() {
    console.log("default: " + this.state.default + this.state.username)
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
          placeholder='Numéro'
          keyboardType='number-pad'
          selectTextOnFocus
          textAlign='center'
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  input: {
    fontSize: 35,
    fontWeight:'bold',
    width: 250,
    height: 64,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
  },
});
