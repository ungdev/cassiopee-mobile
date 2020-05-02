import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import Header from '../../../components/Header'
import ImageMapper from './components/ImageMapper'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import FIGURES from './Maps'
import i18n from '../../../translate/index'

const data = FIGURES

class PlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAreaId: null,
      selectedAreaName: i18n.t('map_title'),
      selectedAreaDescription: i18n.t('map_first_message'),
      selectedAreaOther: null,
      image_plan: require('../../../images/all.png'),
    }
  }

  changeImagePlan(choix) {
    this.setState({
      selectedAreaId: null,
      selectedAreaName: i18n.t('map_title'),
      selectedAreaDescription: i18n.t('map_first_message'),
      selectedAreaOther: null,
    })

    if (choix === 'animation') {
      this.setState({
        image_plan: require('../../../images/animation.jpg'),
      })
    } else if (choix === 'artiste') {
      this.setState({
        image_plan: require('../../../images/artiste.jpg'),
      })
    } else if (choix === 'restauration') {
      this.setState({
        image_plan: require('../../../images/restauration.jpg'),
      })
    } else if (choix === 'eat') {
      this.setState({
        image_plan: require('../../../images/eat.jpg'),
      })
    } else {
      this.setState({
        image_plan: require('../../../images/all.png'),
      })
    }
  }

  mainImgWasPressed(item) {
    if (item.id === this.state.selectedAreaId) {
      this.setState({
        selectedAreaId: null,
        selectedAreaName: i18n.t('map_title'),
        selectedAreaDescription: i18n.t('map_first_message'),
        selectedAreaOther: null,
      })
    } else {
      this.setState({
        selectedAreaId: item.id,
        selectedAreaName: item.name,
        selectedAreaDescription: item.description,
        selectedAreaOther: item.selling,
      })
    }
  }

  adaptcontain() {
    if (this.state.selectedAreaOther == null) {
      return null
    } else {
      return (
        <View style={styles.container_other_detail}>
          <Text style={styles.container_other_detail_text}>
            {this.state.selectedAreaOther}
          </Text>
        </View>
      )
    }
  }

  render() {
    const {
      selectedAreaId,
      selectedAreaName,
      selectedAreaDescription,
      selectedAreaOther,
      image_plan,
    } = this.state

    return (
      <React.Fragment>
        <Header bigtitle={i18n.t('menu_map')} />
        <SafeAreaView style={styles.droidSafeArea}>
          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={styles.main_container}>
              <ScrollView style={styles.container_map}>
                <ReactNativeZoomableView
                  maxZoom={3}
                  minZoom={0.55}
                  zoomStep={-0.000003}
                  initialZoom={1}
                  bindToBorders={true}
                  pinchToZoomInSensitivity={2}
                  pinchToZoomOutSensitivity={2}
                  movementSensibility={0.7}
                  captureEvent={true}
                >
                  <ImageMapper
                    imgHeight={330}
                    imgWidth={395}
                    imgSource={this.state.image_plan}
                    imgMap={data}
                    onPress={(item, idx, event) =>
                      this.mainImgWasPressed(item, idx, event)
                    }
                    containerStyle={{ top: 0 }}
                    selectedAreaId={this.state.selectedAreaId}
                  />
                </ReactNativeZoomableView>
              </ScrollView>
              <View style={styles.select_bouton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changeImagePlan('all')}
                >
                  <Text style={styles.text_button}>
                    {i18n.t('map_filter_all')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changeImagePlan('animation')}
                >
                  <Text style={styles.text_button}>
                    {i18n.t('map_filter_animation')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changeImagePlan('artiste')}
                >
                  <Text style={styles.text_button}>
                    {i18n.t('map_filter_artist')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.changeImagePlan('restauration')}
                >
                  <Text style={styles.text_button}>
                    {i18n.t('map_filter_food')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button2}
                  onPress={() => this.changeImagePlan('eat')}
                >
                  <Text style={styles.text_button}>
                    {i18n.t('map_filter_eat')}
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.container_description}>
                <View style={styles.container_description_detail}>
                  <Text style={styles.container_description_detail_name}>
                    {selectedAreaName}
                  </Text>
                  <Text style={styles.container_description_detail_text}>
                    {selectedAreaDescription}
                  </Text>
                </View>
                {this.adaptcontain()}
              </ScrollView>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    width: '100%',
    height: '100%',
  },
  container_map: {
    height: '40%',
    width: '100%',
  },
  container_description: {
    width: '100%',
    height: '60%',
    backgroundColor: '#171530',
    margin: 0,
    paddingTop: 6,
  },
  container_description_detail: {
    width: '96%',
    padding: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  container_description_detail_name: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  container_description_detail_text: {
    fontSize: 15,
    padding: 6,
    paddingTop: 15,
    color: 'white',
    textAlign: 'center',
  },
  container_other_detail: {
    marginTop: 8,
    width: '96%',
    padding: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  container_other_detail_text: {
    fontSize: 15,
    padding: 6,
    color: 'white',
  },
  select_bouton: {
    width: '100%',
    paddingTop: 6,
    paddingBottom: 6,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    borderRightWidth: 1,
    borderColor: 'white',
  },
  button2: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
  text_button: {
    color: 'white',
    fontSize: 15,
    paddingRight: 5,
    paddingRight: 5,
  },
  droidSafeArea: {
    flex:
      (Platform.OS === 'android' ? 1 : 0) ||
      (Dimensions.get('screen').height < 600 ? 1 : 0),
    backgroundColor: '#171530',
  },
})

export default PlanScreen
