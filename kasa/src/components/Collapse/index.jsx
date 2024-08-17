import { useState } from 'react'
import { GoChevronUp } from 'react-icons/go'

export default function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="collapse">
      <button className="collapse__btn" onClick={toggle}>
        <h2 className="collapse__title">
          {title}
          <GoChevronUp
            className={`collapse__title--chevron ${open ? 'active' : ''}`}
          />
        </h2>
      </button>
      {open && (
        <div className="collapse__textContainer">
          <p className="collapse__textContainer">{text}</p>
        </div>
      )}
    </div>
  )
}
