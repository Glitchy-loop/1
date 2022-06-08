import React from 'react'
import * as S from './List.styles'
import PropTypes from 'prop-types'
import ListItem from '../ListItem/ListItem'

const List = ({listItems}) => {
  return (
    <S.List>
       {listItems && listItems.map(task => (
           <ListItem key={task.task} task={task.task} date={task.date}/>
       ))}
    </S.List>
  )
}

List.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired
    })).isRequired
}

export default List