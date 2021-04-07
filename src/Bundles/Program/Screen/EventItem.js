import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native'
import Collapsible from 'react-native-collapsible'
import env from '../../../config'
import moment from 'moment'
import i18n from '../../../translate/index'
import { LinearGradient } from 'expo-linear-gradient'

export class EventItem extends React.Component {
  constructor(props) {
    super(props)

    this.icons = {
      up: require('../../../../assets/chevron_white_up.png'),
      down: require('../../../../assets/chevron_white_down.png'),
    }
  }

  state = {
    collapsed: true,
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render() {
    const { event } = this.props
    let icon = this.icons['down']
    if (this.state.collapsed === false) {
      icon = this.icons['up']
    }

    return (
      <React.Fragment>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          style={styles.poster}
          source={{ uri: `${env.API_URI}/api/v1${event.image}` }}
        >
          <TouchableOpacity
            style={styles.item_container}
            onPress={this.toggleExpanded}
          >
            <View style={styles.hour_start}>
              <Text style={styles.hour_start_text}>
                {moment(event.start).format('HH:mm')}
              </Text>
            </View>

            <View style={styles.name_event}>
              <Text style={styles.name_event_text}>{event.name}</Text>
            </View>

            <View style={styles.chevron}>
              <Image style={styles.images} source={icon}></Image>
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <Collapsible collapsed={this.state.collapsed}>
          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={['rgb(198, 233, 250)', 'rgba(198, 233, 250, 0.6)']}
            style={styles.content}
          >
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              {i18n.t('program_list_startEvent')}{' '}
              <Text style={{ fontWeight: 'normal' }}>
                {moment(event.start).format('HH:mm')}
              </Text>
            </Text>
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              {i18n.t('program_list_place')}{' '}
              <Text style={{ fontWeight: 'normal' }}>{event.place}</Text>
            </Text>
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              {i18n.t('program_list_description')}{' '}
              <Text style={{ fontWeight: 'normal' }}>{event.description}</Text>
            </Text>

            <Text style={{ fontWeight: 'bold' }}>
              {i18n.t('program_list_endEvent')}{' '}
              <Text style={{ fontWeight: 'normal' }}>
                {moment(event.end).format('HH:mm')}
              </Text>
            </Text>
          </LinearGradient>
        </Collapsible>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  poster: {
    marginTop: 15,
    resizeMode: 'stretch',
    alignSelf: 'center',
    height: 90,
    justifyContent: 'center',
  },
  item_container: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  hour_start: {
    height: 90,
    width: '26%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'transparent',
    justifyContent: 'center',
  },
  hour_start_text: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  name_event: {
    height: 90,
    width: '60%',
    justifyContent: 'center',
  },
  name_event_text: {
    fontSize: 18,
    margin: 0,
    color: 'white',
    fontWeight: 'bold',
  },
  chevron: {
    height: 90,
    width: '12%',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  images: {
    width: 30,
    height: 25,
    marginRight: 12,
  },
  content: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent',
    padding: 5,
    width: '98%',
    alignSelf: 'center',
  },
})
