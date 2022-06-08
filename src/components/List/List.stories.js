import React from 'react'
import List from './List'

export default {
  title: 'List',
  component: List
}

const tasks = [
  { task: 'Buy cucumber', date: '10:00AM' },
  { task: 'Go to the gym', date: '12:00AM' },
  { task: 'Water the flowers', date: '18:00AM' }
]

export const primary = () => <List listItems={tasks} />
