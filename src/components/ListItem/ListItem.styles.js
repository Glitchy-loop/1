import styled from 'styled-components'

export const ListItem = styled.div`
  display: flex;

  &:not(:first-child) {
    border-top: 0.1rem solid #ccc;
  }
`

export const Task = styled.div`
  display: flex;
`

export const Date = styled.div`
  display: flex;
  color: #757575;
  font-weight: bold;
`
export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  width: 100%;
`
