import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header2 from '../../../components/Header2.js'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import BeautyWebView from 'react-native-beauty-webview'

class WebView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: true,
    }
  }

  goReturn = () => {
    this.setState({ modalVisible: false })
    this.props.navigation.navigate(this.props.route.params.foodtruck)
  }
  render() {
    const { modalVisible } = this.state
    return (
      <React.Fragment>
        <TouchableWithoutFeedback
          onPress={() => {
            this.props.navigation.navigate('Back')
          }}
        >
          <Header2 bigtitle="Order" />
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
            <BeautyWebView
              visible={modalVisible}
              onPressClose={() => this.goReturn()}
              url={this.props.route.params.url}
              headerBackground={'#094E6F'}
              backgroundColor={'#094E6F'}
              headerContent={'light'}
              progressColor={'#22749C'}
              progressBarType={'background'}
            />
          </LinearGradient>
        </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default WebView
