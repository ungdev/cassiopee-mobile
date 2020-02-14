import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import Animated, { Easing } from 'react-native-reanimated'
import { bInterpolate, bin, useTransition } from 'react-native-redash'
import Chevron from './Chevron'
import Item, { LIST_ITEM_HEIGHT, ListItem } from './ListItem'

const { not, interpolate } = Animated
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    overflow: 'hidden',
  },
})

export default ({ aller }: ListProps) => {
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
    LIST_ITEM_HEIGHT * aller.items.length
  )
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  })
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setOpen(prev => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
          ]}
        >
          <Text style={styles.title}>Beurnonville - UTT</Text>
          <Chevron {...{ transition }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        {aller.items.map((item, key) => (
          <Item {...{ item, key }} isLast={key === aller.items.length - 1} />
        ))}
      </Animated.View>
    </>
  )
}
