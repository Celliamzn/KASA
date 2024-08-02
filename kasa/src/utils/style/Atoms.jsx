import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: black;
  &:hover {
  text-decoration: underline;
  }
`
