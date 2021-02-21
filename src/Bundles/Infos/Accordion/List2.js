import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import Animated, { Easing } from 'react-native-reanimated'
import { bInterpolate, bin, useTransition } from 'react-native-redash'
import Item, { LIST_ITEM_HEIGHT, ListItem } from './ListItem'
import Chevron from './Chevron'

const { not, interpolate } = Animated
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A3D60',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  items: {
    overflow: 'hidden',
  },
})

export default ({ retour }: ListProps) => {
  const [open, setOpen] = useState(false)
  const transition = useTransition(
    open,
    not(bin(open)),
    bin(open),
    400,
    Easing.inOut(Easing.ease)
  )
  const height = bInterpolate(
    transition,
    0,
    LIST_ITEM_HEIGHT * retour.items.length
  )
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  })
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
          ]}
        >
          <Text style={styles.title}>UTT - Beurnonville</Text>
          <Chevron {...{ transition }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        {retour.items.map((item, key) => (
          <Item {...{ item, key }} isLast={key === retour.items.length - 1} />
        ))}
      </Animated.View>
    </>
  )
}
