export default function Card({ cover, title }) {
	return (
		<div>
			<img className='card__img' src={cover} alt={`${title} cover`} />
			<span className='card__name'>{title}</span>
		</div>
	)
}