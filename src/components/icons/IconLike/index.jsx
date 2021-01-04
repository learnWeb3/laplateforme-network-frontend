import React from 'react'

const IconLike = ({ onclick, fillColor }) => {
	return (
		<svg
			className='ml-2'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onclick}
		>
			<path
				d='M11.9996 21.054C-8 9.99991 5.99999 -2.00009 11.9996 5.58797C18 -2.00009 32 9.99991 11.9996 21.054Z'
				stroke={fillColor}
				strokeWidth='1.8'
			/>
		</svg>
	)
}

export default IconLike
