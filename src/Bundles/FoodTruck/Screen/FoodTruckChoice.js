import { LinearGradient } from 'expo-linear-gradient'
import * as React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import Header from '../../../components/Header.js'
import { TitleText } from '../../../components/TitleText.js'
import i18n from '../../../translate/index'

export default function FoodTruckChoice({ navigation }) {
  return (
    <React.Fragment>
      <Header bigtitle={i18n.t('menu_foodtruck')} />
      <SafeAreaView
        style={{
          backgroundColor: '#0A3D60',
          flex: 1,
        }}
      >
        <LinearGradient
          style={{ height: '100%' }}
          start={[0, 1]}
          end={[1, 0]}
          colors={['#22749C', '#43B9D5']}
        >
          <View style={styles.containerBottomImage}>
            <Image
              style={styles.bottomImage}
              source={require('../../../../assets/bottom_ocean.png')}
            />
          </View>
          <View style={styles.main_container}>
            <TitleText style={styles.tipText}>
              Choisissez votre Food Truck.
            </TitleText>
            <TouchableOpacity
              style={styles.button}
              title="Go to TRUCK 1"
              onPress={() => navigation.navigate('Food Truck 1')}
            >
              <TitleText style={styles.text}>Name Food Truck 1</TitleText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              title="Go to TRUCK 2"
              onPress={() => navigation.navigate('Food Truck 2')}
            >
              <TitleText style={styles.text}>Name Food Truck 2</TitleText>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    margin: '5%',
    padding: 5,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: '#094E6F',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
  },
  tipText: {
    fontSize: 28,
    color: 'white',
    marginBottom: '10%',
  },
  containerBottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '18%',
    width: '100%',
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: (Dimensions.get('screen').height * 17) / 100,
    width: Dimensions.get('screen').width,
    resizeMode: 'cover',
  },
})
