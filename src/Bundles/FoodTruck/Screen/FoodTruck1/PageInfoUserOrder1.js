import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import React from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native'
import Header2 from '../../../../components/Header2.js'
import { TitleText } from '../../../../components/TitleText.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import i18n from '../../../../translate/index.js'

class PageInfoUserOrder1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      modalVisible: false,
    }
  }

  handleFirstName = (text) => {
    this.setState({ firstname: text })
  }

  handleLastName = (text) => {
    this.setState({ lastname: text })
  }

  displayEtuPay = (url) => {
    this.props.navigation.navigate('WebView', {
      url: url,
      foodtruck: 'Food Truck 1',
    })
  }

  createOrderEtuPay = async () => {
    const nameRegex = new RegExp('^[a-zA-Z]{3,100}', 'u')
    if ((this.state.firstname === '') | (this.state.lastname === '')) {
      Alert.alert(
        i18n.t('alert_info_title'),
        i18n.t('foodtruck_alert_add_infos'),
        [{ text: 'OK' }],
        { cancelable: false }
      )
    } else if (nameRegex.test(this.state.firstname) !== true) {
      Alert.alert(
        i18n.t('alert_info_title'),
        i18n.t('foodtruck_alert_add_correct_infos'),
        [{ text: 'OK' }],
        { cancelable: false }
      )
    } else {
      const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        provider: 'etupay',
        items: this.props.route.params.items,
      }
      const display = this.displayEtuPay
      console.log('order=', data)
      const config = {
        method: 'post',
        url: 'https://gala.dev.uttnetgroup.fr/bouffe/api/vendors/HQTF7C/orders',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      }
      try {
        axios(config)
          .then(function (response) {
            //console.log(JSON.stringify(response.data))
            display(response.data['url'])
          })
          .catch(function (error) {
            console.log('erreur:', error)
            alert(i18n.t('error') + error)
          })
      } catch (e) {
        console.log('erreur:', e)
        alert(i18n.t('error') + e)
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('Food Truck 1')
          }}
        >
          <Header2 bigtitle={this.props.route.params.nameVendor} />
        </TouchableWithoutFeedback>
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
                source={require('../../../../../assets/bottom_ocean.png')}
              />
            </View>
            <View style={styles.main_container}>
              <TitleText style={styles.tipText}>
                {i18n.t('foodtruck_add_infos')}
              </TitleText>
              <View style={styles.container_input}>
                <TextInput
                  style={styles.input}
                  onChangeText={this.handleFirstName}
                  placeholder={i18n.t('foodtruck_add_infos_firstname')}
                  placeholderTextColor="#0A3D60"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={this.handleLastName}
                  placeholder={i18n.t('foodtruck_add_infos_lastname')}
                  placeholderTextColor="#0A3D60"
                />
              </View>
              <TitleText style={styles.tipText}>
                {i18n.t('foodtruck_amount_order')}{' '}
                {this.props.route.params.price} €
              </TitleText>
              <TouchableOpacity
                style={styles.button}
                title="Lyf Pay"
                onPress={() => console.log('test')}
              >
                <TitleText style={styles.text}>
                  {' '}
                  {i18n.t('foodtruck_pay_lyf_pay')}
                </TitleText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                title="EtuPay"
                onPress={() => this.createOrderEtuPay()}
              >
                <TitleText style={styles.text}>
                  {i18n.t('foodtruck_pay_etu_pay')}
                </TitleText>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default PageInfoUserOrder1

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#0A3D60',
  },
  main_container: {
    width: '95%',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container_input: {
    width: '95%',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#0A3D60',
    color: 'white',
    padding: 5,
  },
  button: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
    margin: '5%',
    padding: 5,
    borderRadius: 0,
    alignSelf: 'center',
    backgroundColor: '#094E6F',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
  },
  tipText: {
    padding: 5,
    fontSize: 25,
    color: 'white',
    marginBottom: '2%',
    textAlign: 'center',
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
