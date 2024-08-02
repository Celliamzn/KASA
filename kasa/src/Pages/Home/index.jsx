import imageBanner from '../../assets/IMG.png'
import '../../utils/style/components/cards.scss'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import locations from '../../locations/locations.json'

export default function Home() {
  return (
    <div>
      <Banner img={imageBanner} text="Chez vous, partout et ailleurs" />
      <div className="cardContainer">
          {locations.map(({ id, cover, title }) => (
            <div key={id} className='card'>
              <Card cover={cover} title={title} />
            </div>
          ))}
      </div>
    </div>
  )
}
