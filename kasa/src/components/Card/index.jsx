export default function Card({ cover, title }) {
	return (
		<div>
			<img className='card__img' src={cover} alt={`${title} cover`} />
			<div className='card__gradient'></div>
			<span className='card__title'>{title}</span>
		</div>
	)
}