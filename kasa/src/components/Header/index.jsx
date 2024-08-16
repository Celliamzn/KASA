import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__nav--link">
          Accueil
        </Link>
        <Link to="/about" className="header__nav--link">
          A Propos
        </Link>
      </nav>
    </div>
  )
}
