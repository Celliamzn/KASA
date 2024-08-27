import Rating from './Rating'

export default function LocationResume({
  title,
  location,
  host,
  rating,
  tags,
}) {
  return (
    <div className="resume">
      <div className="resume__titlelocation">
        <h1 className="resume__titlelocation--title">{title}</h1>
        <h2 className="resume__titlelocation--location">{location}</h2>
      </div>
      <div className="resume__host">
        <p className="resume__host--name">{host.name} </p>
        <img
          src={host.picture}
          alt="host"
          className="resume__host--img"
        ></img>{' '}
      </div>

      <div className="resume__tag">
        {tags.map((tag) => (
          <span className="resume__tag--tags" key={tag}>{tag}</span>
        ))}
      </div>
      <Rating rating={Number(rating)}/>
    </div>
  )
}
