import React from 'react'

const IconMinus = ({ onclick, fillColor }) => {
	return (
		<svg
			className='see-comment'
			title='voir les commentaires'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onclick}
			style={{ cursor: 'pointer' }}
		>
			<g id='remove_circle_24px'>
				<path
					id='icon/content/remove_circle_24px'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM7 12C7 12.55 7.45 13 8 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H8C7.45 11 7 11.45 7 12Z'
					fill={fillColor}
				/>
			</g>
		</svg>
	)
}

export default IconMinus
