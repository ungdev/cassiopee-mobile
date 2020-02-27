import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native'
import Header from '../../../components/Header'
import ImageMapper from './components/ImageMapper'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import FIGURES from './Maps'

const data = FIGURES
const Img = require('../../../images/map.png')

class PlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAreaId: null,
      selectedAreaName: null,
      selectedAreaDescription: null,
    }
  }

  mainImgWasPressed(item, idx, event) {
    if (item.id === this.state.selectedAreaId) {
      this.setState({
        selectedAreaId: null,
        selectedAreaName: null,
        selectedAreaDescription: null,
      })
    } else {
      this.setState({
        selectedAreaId: item.id,
        selectedAreaName: item.name,
        selectedAreaDescription: item.description,
      })
    }
  }

  render() {
    const {
      selectedAreaId,
      selectedAreaName,
      selectedAreaDescription,
    } = this.state

    if (selectedAreaName === null) {
      return (
        <React.Fragment>
          <Header bigtitle="Plan" />
          <ImageBackground
            source={require('../../../images/background_cassiopee_modif.png')}
            style={{ width: '100%', height: '100%' }}
          >
            <View style={styles.main_container}>
              <ScrollView style={styles.container_map}>
                <ReactNativeZoomableView
                  style={styles.container_map}
                  maxZoom={3}
                  minZoom={0.75}
                  zoomStep={0.5}
                  initialZoom={1.05}
                  bindToBorders={true}
                >
                  <ImageMapper
                    imgHeight={330}
                    imgWidth={395}
                    imgSource={Img}
                    imgMap={data}
                    onPress={(item, idx, event) =>
                      this.mainImgWasPressed(item, idx, event)
                    }
                    containerStyle={{ top: 0 }}
                    selectedAreaId={this.state.selectedAreaId}
                  />
                </ReactNativeZoomableView>
              </ScrollView>
              <View style={styles.container_description}>
                <View style={styles.container_description_name}>
                  <Text style={styles.container_description_name_text}>
                    PLAN INTERACTIF
                  </Text>
                  <Text style={styles.container_description_description_text}>
                    Cliquez sur une zone du GALA pour avoir des informations sur
                    celle-ci.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Header bigtitle="Plan" />
        <ImageBackground
          source={require('../../../images/background_cassiopee_modif.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.main_container}>
            <ScrollView style={styles.container_map}>
              <ReactNativeZoomableView
                maxZoom={2}
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
                  imgSource={Img}
                  imgMap={data}
                  onPress={(item, idx, event) =>
                    this.mainImgWasPressed(item, idx, event)
                  }
                  containerStyle={{ margin: 0, padding: 0 }}
                  selectedAreaId={this.state.selectedAreaId}
                />
              </ReactNativeZoomableView>
            </ScrollView>
            <ScrollView style={styles.container_description}>
              <View style={styles.container_description_name}>
                <Text style={styles.container_description_name_text}>
                  {selectedAreaName}
                </Text>
              </View>

              <View style={styles.container_description_description}>
                <Text style={styles.container_description_description_text}>
                  {selectedAreaDescription}
                </Text>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </React.Fragment>
    )
  }
}

export default PlanScreen

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
    paddingTop: 20,
  },
  container_description_name: {
    width: '90%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    padding: 12,
    alignSelf: 'center',
  },
  container_description_name_text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  container_description_description: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
  },
  container_description_description_text: {
    textAlign: 'center',
    fontSize: 15,
    height: 270,
    padding: 8,
    paddingTop: 15,
    color: 'white',
  },
})
