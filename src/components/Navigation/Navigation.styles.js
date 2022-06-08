import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  width: 15rem;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 0.5rem;
`
