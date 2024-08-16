import { useState } from 'react'

import '@fortawesome/fontawesome-free/js/all.js'

export default function Collapse({ title, text }) {
  const [open, setOPen] = useState(false)
  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className="collapse">
      <button className="collapse__title" onClick={toggle}>
        <>
          {title}
          <i class="fa-solid fa-chevron-up"></i>
        </>
      </button>
      {open && <div className="collapse__text">{text}</div>}
    </div>
  )
}
