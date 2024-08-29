import Slideshow from '../../components/Slideshow'
import locations from '../../assets/data/locations.json'
import { useParams } from 'react-router-dom'
import LocationResume from '../../components/LocationResume'
import Collapse from '../../components/Collapse'
import Error from '../Error'

export default function Location() {
  const { id } = useParams()
  const location = locations.find((location) => location.id === id)
  if (!location) {
    return <Error />
  }
  return (
    <>
      <Slideshow images={location.pictures} alt={location.title} />
      <LocationResume
        title={location.title}
        location={location.location}
        host={location.host}
        rating={location.rating}
        tags={location.tags}
      />
      <div className="collapses">
        <Collapse
          className="collapses__collapse"
          title="Description"
          text={location.description}
        />
        <Collapse
          className="collapses__collapse"
          title="Équipements"
          text={location.equipments.map((equipment) => (
            <p key={equipment} className="collapses__collapse--equipment">
              {equipment}
            </p>
          ))}
        />
      </div>
    </>
  )
}
