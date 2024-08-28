import ImageBanner from '../../assets/img/img2.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import about from '../../assets/data/about.json'

export default function About() {
  return (
    <>
      <Banner img={ImageBanner} text="" />
      {about.map(({ title, text }) => (
        <Collapse title={title} text={text} key={title} />
      ))}
    </>
  )
}
