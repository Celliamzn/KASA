import imageBanner from '../../assets/img/IMG.png'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

export default function Home() {
  return (
    <div>
      <Banner img={imageBanner} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  )
}
