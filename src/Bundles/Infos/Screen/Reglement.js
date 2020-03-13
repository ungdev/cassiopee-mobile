import React from 'react'
import { ScrollView, StyleSheet, Text, Linking } from 'react-native'

class Reglement extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.t}>Règlement</Text>
        <Text style={styles.h}>Sécurité</Text>
        <Text style={styles.p}>
          Pour des raisons de sécurité évidentes et un raison du plan VIGIPIRATE
          "SECURITE RENFORCEE - RISQUE ATTENTAT", nous vous rappelons que les
          dispositifs dangereux tels que les armes à feu ou les armes blanches
          sont interdits à l'intérieur de Cassiopée, sans exception.{'\n'}Une
          fouille sera réalisée avant toute entrée, provoquant la confiscation
          de tout matériel pouvant poser un problème de sécurité (rasoir,
          aérosol, ...).
        </Text>
        <Text style={styles.h}>Identité</Text>
        <Text style={styles.p}>
          Une pièce d'identité (permis de conduire, carte d'identité ou
          passeport) ainsi que le billet sont nécessaires afin de pouvoir entrer
          au sein de l'événement (les places étant nominatives). Veuillez noter
          que l'entrée est interdite aux mineurs, même avec autorisation d'un
          responsable légal. Les organisateurs se réservent le droit d'accès.
        </Text>
        <Text style={styles.h}>Vêtements</Text>
        <Text style={styles.p}>
          Une tenue de Gala est exigée. Un vestiaire gratuit sera mis à votre
          disposition toute la soirée.{'\n'}
          {'\n'}Sont autorisés :{'\n'} - Robe de soirée ou tailleur{'\n'} -
          Costume{'\n'} - Chemise{'\n'} - Pantalon en toile{'\n'} - Chaussures
          de ville
          {'\n'}
          {'\n'}
          Sont prohibés :{'\n'} - Jeans{'\n'} - Survêtements{'\n'} - Chaussures
          de sport (baskets){'\n'}
          {'\n'}
          Toute personne ne respectant pas le code vestimentaire de la soirée
          pourra se voir refuser l'entrée par les organisateurs.
        </Text>
        <Text style={styles.h}>Prévention</Text>
        <Text style={styles.p}>
          La prévention lors de la soirée est notre priorité. Nous proposons des
          boissons sans alcool gratuites pour tous. Nous formons également nos
          barmans à la bonne tenue de nos différents bars. De plus, comme chaque
          année, nous mettons en place des navettes gratuites entre le
          centre-ville et l'événement.
        </Text>
        <Text style={styles.h}>Ecologie</Text>
        <Text style={styles.p}>
          Cassiopée a pour objectif de réduire ses déchets au maximum. Ainsi,
          lors de la soirée aucun verre jetable ne sera distribué et tous les
          verres seront réutilisables et consignés.
        </Text>
        <Text style={styles.h}>Local</Text>
        <Text style={styles.p}>
          Afin de promouvoir les produits régionaux, Cassiopée s'associe
          majoritairement avec des fournisseurs locaux.
        </Text>
        <Text style={styles.h}>Social</Text>
        <Text style={styles.p}>
          Afin de rendre l'événement plus accessible, des places sont offertes
          aux bénéficiaires de l’Agoraé et des tarifs préférentiels sont mis en
          place pour les étudiants.
        </Text>
        <Text style={styles.t}>Crédits</Text>
        <Text style={styles.p}>
          Application mobile développée par{' '}
          <Text
            style={styles.dev}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/quentin-letellier')
            }
          >
            Quentin Letellier,
          </Text>{' '}
          étudiant de l'Université de Technologie de Troyes.
        </Text>
        <Text style={styles.h}>Développement</Text>
        <Text style={styles.p}>Application développée avec React Native</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  p: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 15,
    textAlign: 'justify',
    color: 'whitesmoke',
  },
  dev: {
    alignSelf: 'stretch',
    padding: 5,
    fontSize: 15,
    textAlign: 'justify',
    color: 'whitesmoke',
    textDecorationLine: 'underline',
  },

  t: {
    marginTop: 15,
    color: '#bd945a',
    fontSize: 25,
    textAlign: 'center',
  },

  h: {
    marginTop: 15,
    padding: 5,
    color: '#f7ce8c',
    fontSize: 20,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
  },
  link: {
    color: '#00b5ec',
  },
})

export default Reglement