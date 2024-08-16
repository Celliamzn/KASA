import ImageBanner from '../../assets/img2.png'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'


export default function About() {
  return (
    <>
      <Banner img={ImageBanner} text="" />
      <Collapse
        title="Test"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque at magna in sagittis. Nulla dolor elit, laoreet ut quam vel, dictum condimentum dolor. Pellentesque egestas venenatis scelerisque. Sed vel augue turpis. Integer sed porta diam. Praesent faucibus est id consectetur facilisis. Donec nunc orci, fermentum eu fringilla efficitur, mattis eget orci. Integer porttitor elementum nisl, sed porta elit auctor."
      />
    </>
  )
}
