import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { StyledLink } from '../../utils/style/Atoms'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function Header() {
  return (
    <NavContainer>
      <img src={logo} alt="logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </NavContainer>
  )
}
