import React, { Component } from "react";
import {View, Text, StyleSheet, Image, Button,Linking } from "react-native";
import ReactDOM from "react-dom";
import Header from '../../../components/Header';
import DrawerTrigger from '../../../components/DrawerTrigger';
import CountDown from 'react-native-countdown-component';

//import CountDown to show the time
import moment from 'moment';
//import moment to help you play with date and time

class HomeScreen extends Component{

  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      totalDuration: '',
    };
  }


  render(){

    return(
      <React.Fragment>
        <Header bigtitle='Accueil'/>


        <View style={styles.container}>

        <View style={styles.container_image}>
        <Image style={styles.image} source = {require('../../../images/panneau.png')}/>
        </View>

        <View style={styles.container_welcome}>
          <Text style={styles.welcome}>Bienvenue sur l'application Cassiopée Gala !</Text>
          <Text style={styles.welcome}>L'événement ouvre ses portes le 16 Mai 2020.</Text>
        </View>

          <View style={styles.container_countdown}>
          <CountDown
            digitStyle={{backgroundColor: 'yellow'}}
            separatorStyle={{color: 'yellow'}}
            showSeparator
            timeLabels={{d: 'Jours', h: 'Heures', m: 'Minutes', s: 'Secondes'}}
            until={this.state.totalDuration}
            timetoShow={('D', 'H', 'M', 'S')}
            onFinish={() => alert('Le Gala a ouvert ses portes !')}
            size={28}
          />
          </View>

          <View>
            <Button
            title="Prendre Sa Place"
            onPress={() => Linking.openURL('https://www.apple.com/fr/')}
            />
          </View>


      </View>
        </React.Fragment>
    );
  }

  componentDidMount() {
    var that = this;
    var date = moment()
      .utcOffset('+1')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = '2020-05-16 20:00:00';//You can set your own date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    that.setState({ totalDuration: d });
    that.setState({ heure: hours });
    that.setState({ minute: minutes });
    that.setState({ seconde: seconds });
    //Settign up the duration of countdown in seconds to re-render
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_image: {
    alignItems: 'center',
    width: "100%",
    position: 'absolute',
    top: 0,
  },
  image: {
    marginTop: 10,
    width: 320,
    height : 200
  },
  container_countdown: {
    margin: 10,
    padding: 5,
    borderWidth: 3
  },
  container_welcome: {
    borderWidth: 3,
    margin: 5,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    alignItems: 'center'
  }

})
