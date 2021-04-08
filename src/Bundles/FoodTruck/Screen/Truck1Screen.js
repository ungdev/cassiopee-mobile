import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Header2 from '../../../components/Header2'

export default class Truck1Screen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <React.Fragment>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('Back')
          }}
        >
          <Header2 bigtitle="Food Truck 1" />
        </TouchableWithoutFeedback>
        <SafeAreaView
          style={{
            backgroundColor: '#094E6F',
            flex: 1,
          }}
        >
          <LinearGradient
            style={{ height: '100%' }}
            start={[0, 1]}
            end={[1, 0]}
            colors={['#22749C', '#43B9D5']}
          >
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={styles.tabtotal}>
                <Text style={styles.textleft}>Total Commande : </Text>
                <Text style={styles.textright}>XX,XX €</Text>
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  tabtotal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#094E6F',
    padding: 10,
    flexDirection: 'row',
  },
  textleft: {
    width: '50%',
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
  },
  textright: {
    width: '50%',
    color: 'white',
    textAlign: 'right',
    fontSize: 20,
  },
})
