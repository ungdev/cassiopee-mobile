import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import env from '../../../config'
import moment from 'moment'

export class EventItem extends React.Component {
  constructor(props) {
    super(props)

    this.icons = {
      up: require('../../../images/chevron-up.png'),
      down: require('../../../images/chevron-down.png'),
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

        <Collapsible collapsed={this.state.collapsed}>
          <View style={styles.content}>
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              Début de l'événement :{' '}
              <Text style={{ fontWeight: 'normal' }}>
                {moment(event.start).format('HH:mm')}
              </Text>
            </Text>
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              Lieu : <Text style={{ fontWeight: 'normal' }}>{event.place}</Text>
            </Text>
            <Text style={{ fontWeight: 'bold', paddingBottom: 10 }}>
              Description de l'événement :{' '}
              <Text style={{ fontWeight: 'normal' }}>{event.description}</Text>
            </Text>

            <Text style={{ fontWeight: 'bold' }}>
              Fin de l'événement :{' '}
              <Text style={{ fontWeight: 'normal' }}>
                {moment(event.end).format('HH:mm')}
              </Text>
            </Text>
            <Image
              style={styles.poster}
              source={{ uri: `${env.API_URI}/api/v1${event.image}` }}
            ></Image>
          </View>
        </Collapsible>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  hour_start: {
    height: 75,
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
  },
  name_event: {
    height: 75,
    width: '60%',
    justifyContent: 'center',
  },
  name_event_text: {
    fontSize: 17,
    margin: 0,
  },
  chevron: {
    height: 75,
    width: '15%',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  images: {
    marginRight: 12,
    width: 30,
    height: 25,
  },
  content: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderTopWidth: 0,
    padding: 5,
  },
  poster: {
    height: 160,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'stretch',
  },
})
