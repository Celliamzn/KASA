import logo from '../../assets/logo-white.png'
import '../../utils/style/components/footer.scss'

export default function Footer() {
    return(
        <div className='footer'>
        <img src={logo} alt='logo' />
      <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )

}