import React, { useState } from 'react'
import * as S from './ListItem.styles'
import PropTypes from 'prop-types'

const ListItem = ({task, date, onChecked}) => {

    const [checked, setChecked] = useState(false)

    const handleChange = (value) => {
        setChecked(value)
        onChecked(value)
    }

  return (
    <S.ListItem>
        <S.Label>
            <input 
            type='checkbox' 
            checked={checked} 
            onChange={(e) => handleChange(!checked)}
            />
            <S.Task>{task}</S.Task>
            <S.Date>{new Date(date).toLocaleDateString('lt')}</S.Date>
        </S.Label>
    </S.ListItem>
  )
}

ListItem.propTypes = {
    task: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
}

export default ListItem
