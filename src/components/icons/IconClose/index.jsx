import React from 'react'

const IconClose = ({ classNames, onClick }) => {
	return (
		<svg
			width='25'
			height='25'
			viewBox='0 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames ? classNames.join(' ') : ''}
			onClick={() => onClick()}
			style={{ cursor: 'pointer' }}
		>
			<g id='cancel_25px'>
				<path
					id='icon/navigation/cancel_25px'
					fillRule='evenodd'
					clipRule='evenodd'
					d='M2 12C2 6.47 6.46997 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.46997 22 2 17.53 2 12ZM14.89 16.3C15.2799 16.69 15.9099 16.69 16.2999 16.3C16.6799 15.91 16.6799 15.27 16.2999 14.89L13.4099 12L16.2999 9.11002C16.6899 8.72 16.6899 8.09 16.2999 7.70001C15.9099 7.31 15.2799 7.31 14.89 7.70001L12 10.59L9.10999 7.70001C8.71997 7.31 8.08997 7.31 7.69995 7.70001C7.5127 7.88684 7.40747 8.14047 7.40747 8.405C7.40747 8.66953 7.5127 8.92316 7.69995 9.11002L10.59 12L7.69995 14.89C7.5127 15.0768 7.40747 15.3305 7.40747 15.595C7.40747 15.8595 7.5127 16.1132 7.69995 16.3C8.08997 16.69 8.71997 16.69 9.10999 16.3L12 13.41L14.89 16.3Z'
					fill='black'
					fillOpacity='0.54'
				/>
			</g>
		</svg>
	)
}

export default IconClose
