import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MapLeaflet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 17.44212,
      lng: 78.391384,
      zoom: 15,
      maxZoom: 30,
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng]

    let source =
      '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    return (
      <View>
        <Map
          center={position}
          zoom={this.state.zoom}
          maxZoom={this.state.maxZoom}
        >
          <TileLayer
            attribution={source}
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {markerList.map((marker, index) => {
            let post = [marker.lat, marker.lng]
            return (
              <Marker key={index} position={post}>
                {this.renderPopup(index)}
              </Marker>
            )
          })}
        </Map>
      </View>
    )
  }
}

export default MapLeaflet
