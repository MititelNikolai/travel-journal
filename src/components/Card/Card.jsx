import React from 'react'
import './card.css'
import Point from '../../assets/point.svg'
import Mount from '../../assets/img/mountFuji.png'
import Opera from '../../assets/img/operaHouse.png'
import River from '../../assets/img/river.png'
const Card = props => {
	//This function is necessary for the correct display of images on GitHub Pages
	function selectImg() {
		switch (props.imgUrl) {
			case 'mountFuji.png':
				return Mount
			case 'operaHouse.png':
				return Opera
			case 'river.png':
				return River
			default:
				return 'Image'
		}
	}
	return (
		<div className='container card__container'>
			<img src={selectImg()} alt={props.title} className='card__img' />
			<div className='card__info'>
				<div className='card__title'>
					<img src={Point} alt='Location point'></img>
					<p className='card__location'>{props.location}</p>
					<a
						className='card__google-maps'
						href={props.googleMaps}
						target='_blank'
						rel='noreferrer'
					>
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
