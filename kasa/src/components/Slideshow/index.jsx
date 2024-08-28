import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function Slideshow({ images }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const length = images?.length

  const nextImage = () => {
    setLoading(true)
    setTimeout(() => {
      setImageIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      )
    }, 500)
  }

  const prevImage = () => {
    setLoading(true)
    setTimeout(() => {
      setImageIndex((prevIndex) =>
        prevIndex === 0 ? length - 1 : prevIndex - 1
      )
    }, 500)
  }

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <section className="slideshow">
      {length > 1 && (
        <GoChevronLeft className="ChevronLeft" onClick={prevImage} />
      )}
      {length > 1 && (
        <GoChevronRight className="ChevronRight" onClick={nextImage} />
      )}
      {images?.map((image, index) => {
        return (
          <div
            key={index}
            className={
              index === image ? 'slideshow__slider active' : 'slideshow__slider'
            }
          >
            {index === imageIndex && (
              <>
                {loading && (
                  <div className="slideshow__loader">
                    <p className="slideshow__loader--loading">Loading...</p>
                  </div>
                )}
                <img
                  src={image}
                  alt="appartement"
                  className={`slideshow__slider--image ${
                    loading ? `displayNone` : `display`
                  }`}
                  onLoad={handleImageLoad}
                />
              </>
            )}
            {index === imageIndex && length > 1 && (
              <span className="slideshow__slider--number">
                {imageIndex + 1}/{length}
              </span>
            )}
          </div>
        )
      })}
    </section>
  )
}
