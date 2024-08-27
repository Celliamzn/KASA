import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function Slideshow({ images }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const length = images?.length

  const nextImage = () => {
    setLoading(true)
    setImageIndex(imageIndex === length - 1 ? 0 : imageIndex + 1)
  }

  const prevImage = () => {
    setLoading(true)
    setImageIndex(imageIndex === 0 ? length - 1 : imageIndex - 1)
  }
  const handleImageLoad = () => {
    setLoading(false);
  };

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
              {loading && (<div className="slideshow__loader">
                  {/* Ici, vous pouvez ajouter une animation de chargement, par exemple un spinner */}
                  <p className="slideshow__loader--loading">Loading...</p>
                </div>) }
                <img
                src={image}
                alt="appartement"
                className={`slideshow__slider--image ${loading ? `displayNone` : `display`}`}
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
