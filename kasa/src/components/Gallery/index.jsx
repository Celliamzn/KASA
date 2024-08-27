import Card from '../../components/Card'
import locations from '../../assets/data/locations.json'
import { Link } from 'react-router-dom'

export default function Gallery() {

  return (
    <div className="gallery">
      {locations.map(({ id, cover, title }) => (
        <div key={id} className="card">
          <Link to={`/location/${id}`}>
            <Card cover={cover} title={title} />
          </Link>
        </div>
      ))}
      
    </div>
  )
}
