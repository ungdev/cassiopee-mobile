import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const LIST_ITEM_HEIGHT = 60; //height of item list
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#f4f4f6",
    height: LIST_ITEM_HEIGHT
  },
  name: {
    fontSize: 16
  },
  pointsContainerGreen: {
    borderRadius: 8,
    backgroundColor: "#44c282",
    padding: 8
  },
  pointsContainerRed: {
    borderRadius: 8,
    backgroundColor: "red",
    padding: 8
  },
});

export interface ListItem {
  name: string;
}

interface ListItemProps {
  item: ListItem;
  isLast: boolean;
}

export default ({ item, isLast }: ListItemProps) => {
  const bottomRadius = isLast ? 8 : 0;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() +1; //Current Month
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var time = hours + 'H' + min;
    //avant le 16 mai, tous les points sont rouges car il n'y a pas de navette aux arrêts en question
    //le 16 mai et 17 mai un point vert = navette pas encore passé car ce n'est pas encore l'heure
    // dès le 17 mai 6H du matin les points redeviennent rouges, Gala terminé, plus de navette

    //console.log(time);
  if ((date==17)&&(month==5)&&(item.name>time)){ //COMPORTEMENT DIMANCHE 17 MAI
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius
          }
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.pointsContainerGreen}>
        </View>
      </View>
    );
  }

  else if ((date>=17)&&(month>=5)&&(hours>6)){ //COMPORTEMENT APRES GALA
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius
          }
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.pointsContainerRed}>
        </View>
      </View>
    );
  }
  else if ((date==16)&&(month==5)&&(item.name<time)){ //COMPORTEMENT SAMEDI 16 MAI
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius
          }
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.pointsContainerGreen}>
        </View>
      </View>
    );
  }
  else{ //COMPORTEMENT AVANT GALA
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius
          }
        ]}
      >
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.pointsContainerRed}>

        </View>
      </View>
    );
  }

};
