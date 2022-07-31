import React from 'react'
import './card.css'
import Point from '../../assets/point.svg'
const Card = props => {
	return (
		<div className='container card__container'>
			<img src={props.imgUrl} alt={props.title} className='card__img' />
			<div className='card__info'>
				<div className='card__title'>
					<img src={Point} alt='Location point'></img>
					<p className='card__location'>{props.location}</p>
					<a className='card__google-maps' href={props.googleMaps}>
						View on Google Maps
					</a>
				</div>
				<h2 className='card__location-title'>{props.title}</h2>
				<div className='card__description'>
					<p className='card__date'>
						{props.startDate} - {props.endDate}
					</p>
					<p className='card__location-desc'>{props.description}</p>
				</div>
			</div>
		</div>
	)
}

export default Card
