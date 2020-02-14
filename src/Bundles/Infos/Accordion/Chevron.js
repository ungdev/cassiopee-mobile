import React from 'react'
import { StyleSheet } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import Animated from 'react-native-reanimated'
import { bInterpolate, bInterpolateColor } from 'react-native-redash'

const size = 30
const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ({ transition }: ChevronProps) => {
  const rotateZ = bInterpolate(transition, -Math.PI, 0)
  return (
    <Animated.View style={[styles.container, { transform: [{ rotateZ }] }]}>
      <Icon name="chevron-up" color="black" size={24} />
    </Animated.View>
  )
}
