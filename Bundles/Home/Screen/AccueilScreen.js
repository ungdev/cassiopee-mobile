import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../../../components/Header.js'
import CountDown from 'react-native-countdown-component'
//import CountDown to show the time
import moment from 'moment'
//import moment to help you play with date and time

class AccueilScreen extends Component {
  constructor(props) {
    super(props)
    //initialize the counter duration
    this.state = {
      totalDuration: '',
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header bigtitle="Accueil" />
        <View style={styles.container}>
          <CountDown
            style={styles.decompte}
            timeLabels={{
              d: 'Jours',
              h: 'Heures',
              m: 'Minutes',
              s: 'Secondes',
            }}
            until={this.state.totalDuration}
            //duration of countdown in seconds
            timetoShow={('D', 'H', 'M', 'S')}
            //formate to show
            onFinish={() => alert('Le Gala a ouvert ses portes !')}
            //on Finish call
            size={20}
          />
          <Text style={styles.texte}>Accueil</Text>
        </View>
      </React.Fragment>
    )
  }

  componentDidMount() {
    var that = this
    var date = moment()
      .utcOffset('+1')
      .format('YYYY-MM-DD hh:mm:ss')
    //Getting the current date-time with required formate and UTC
    var expirydate = '2020-05-16 20:00:00' //You can set your own date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)))
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours())
    var minutes = parseInt(diffr.minutes())
    var seconds = parseInt(diffr.seconds())
    var d = hours * 60 * 60 + minutes * 60 + seconds
    //converting in seconds
    that.setState({ totalDuration: d })
    that.setState({ heure: hours })
    that.setState({ minute: minutes })
    that.setState({ seconde: seconds })
    //Settign up the duration of countdown in seconds to re-render
  }
}

export default AccueilScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
  decompte: {
    backgroundColor: 'purple',
  },
})
