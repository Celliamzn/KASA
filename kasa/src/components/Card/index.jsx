export default function Card({ cover, title }) {
	return (
		<div>
			<img className='card__img' src={cover} alt={`${title} cover`} />
			<div className='card__gradient'></div>
			<h2 className='card__title'>{title}</h2>
		</div>
	)
}