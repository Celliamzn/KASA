import React, { useState, useRef, useEffect } from 'react'
import { GoChevronUp } from 'react-icons/go'

export default function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    if (open) {
      textRef.current.style.height = `${textRef.current.scrollHeight}px`
      textRef.current.style.padding = '15px 20px'
    } else {
      textRef.current.style.height = '0'
      textRef.current.style.padding = '0 20px'
    }
  }, [open, textRef])

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
    
        <div className="collapse__textContainer" ref={textRef}>
          {text}
        </div>
    </div>
  )
}
