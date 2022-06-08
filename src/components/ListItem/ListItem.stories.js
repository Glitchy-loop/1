import React from 'react'
import ListItem from './ListItem'

export default {
  title: 'ListItem',
  component: ListItem
}

export const primary = () => (
  <ListItem task='Go to the gym.' date='8:00 AM' onChecked={value => {}} />
)
