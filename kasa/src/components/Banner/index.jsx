export default function Banner({img, text}) {
    return (
      <div className="banner">
          <img className="banner__img" src={img} alt="banner" />
          <p className="banner__text">{text}</p>
      </div>
    )
  }