import { GoStarFill } from 'react-icons/go'

export default function Rating({rating}) {
  const notes = [1, 2, 3, 4, 5]

  return (
    <div className='resume__rating'>
      {notes.map((note) =>
        rating >= note ? (
          <GoStarFill className="resume__rating--rate" key={note}/>
        ) : (
          <GoStarFill className="resume__rating--noRate" key={note} />
        )
      )}
    </div>
  )
}
