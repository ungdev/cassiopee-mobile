import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Dimensions, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Header from '../../../components/Header'
import ImageMapper from './components/ImageMapper'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'
import FIGURES from './Maps'
import i18n from '../../../translate/index'
import { TitleText } from '../../../components/TitleText'
import { StyledText } from '../../../components/StyledText'
import { SafeAreaView } from 'react-navigation'
import { LinearGradient } from 'expo-linear-gradient'
const Device = require('react-native-device-detection')

const data = FIGURES

class PlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAreaId: null,
      selectedAreaName: i18n.t('map_title'),
      selectedAreaDescription: i18n.t('map_first_message'),
      selectedAreaOther: null,
      image_plan: require('../../../../assets/all.png'),
      index: 0,
    }
  }

  changeImagePlan = (index) => {
    this.setState({
      selectedAreaId: null,
      selectedAreaName: i18n.t('map_title'),
      selectedAreaDescription: i18n.t('map_first_message'),
      selectedAreaOther: null,
      index: index,
    })

    if (index === 1) {
      this.setState({
        image_plan: require('../../../../assets/all.png'),
      })
    } else if (index === 2) {
      this.setState({
        image_plan: require('../../../../assets/all.png'),
      })
    } else if (index === 3) {
      this.setState({
        image_plan: require('../../../../assets/all.png'),
      })
    } else if (index === 4) {
      this.setState({
        image_plan: require('../../../../assets/all.png'),
      })
    } else {
      this.setState({
        image_plan: require('../../../../assets/all.png'),
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
          <StyledText style={styles.container_other_detail_text}>
            {this.state.selectedAreaOther}
          </StyledText>
        </View>
      )
    }
  }

  render() {
    const { selectedAreaName, selectedAreaDescription } = this.state

    return (
      <React.Fragment>
        <LinearGradient
          style={{ height: '100%' }}
          start={[0, 1]}
          end={[1, 0]}
          colors={['#22749C', '#43B9D5']}
        >
          <Header bigtitle={i18n.t('menu_map')} />

          <ScrollView style={styles.container_map}>
            <ReactNativeZoomableView
              maxZoom={Device.isTablet ? 5 : 3}
              minZoom={0.55}
              zoomStep={-0.000003}
              initialZoom={Device.isTablet ? 1 : 1}
              bindToBorders={true}
              pinchToZoomInSensitivity={Device.isTablet ? 3 : 2}
              pinchToZoomOutSensitivity={Device.isTablet ? 3 : 2}
              movementSensibility={0.7}
              captureEvent={true}
            >
              <ImageMapper
                imgHeight={Device.isTablet ? 330 : 330}
                imgWidth={Device.isTablet ? 395 : 395}
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
            <ButtonGroup
              onPress={this.changeImagePlan}
              selectedButtonStyle={{ backgroundColor: '#094E6F' }}
              selectedIndex={this.state.index}
              buttons={[
                i18n.t('map_filter_all'),
                i18n.t('map_filter_animation'),
                i18n.t('map_filter_artist'),
                i18n.t('map_filter_food'),
                i18n.t('map_filter_eat'),
              ]}
              containerStyle={styles.button}
              textStyle={styles.text_button}
            />
          </View>

          <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={styles.droidSafeArea}>
              <View style={styles.container_description_detail}>
                <TitleText style={styles.container_description_detail_name}>
                  {selectedAreaName}
                </TitleText>
                <StyledText style={styles.container_description_detail_text}>
                  {selectedAreaDescription}
                </StyledText>
              </View>
              {this.adaptcontain()}
            </SafeAreaView>
          </ScrollView>
        </LinearGradient>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container_map: {
    flex: 1,
  },
  container_description_detail: {
    width: '96%',
    padding: 5,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
  },
  container_description_detail_name: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  container_description_detail_text: {
    fontSize: 17,
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
    borderRadius: 10,
  },
  container_other_detail_text: {
    fontSize: 17,
    padding: 6,
    color: 'white',
  },
  select_bouton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  button: {
    height: 40,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  text_button: {
    color: 'white',
    fontSize: Dimensions.get('screen').height < 600 ? 12 : 14,
    textAlign: 'center',
    fontFamily: 'brigade-regular',
  },
  droidSafeArea: {
    height: '100%',
    flex:
      (Platform.OS === 'android' ? 1 : 0) ||
      (Dimensions.get('screen').height < 600 ? 1 : 0),
    backgroundColor: 'transparent',
  },
})

if (Device.isTablet) {
  Object.assign(styles, {
    container_map: {
      height: '20%',
      width: '100%',
    },
  })
}

export default PlanScreen
