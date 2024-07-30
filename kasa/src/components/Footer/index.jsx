import logo from '../../assets/logo-white.png'
import styled from 'styled-components'

const Footerontainer = styled.nav`
  padding: 30px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Footer() {
    return(
        <Footerontainer>
        <img src={logo} alt='logo' />
      <p>© 2020 Kasa. All rights reserved</p>
        </Footerontainer>
    )

}