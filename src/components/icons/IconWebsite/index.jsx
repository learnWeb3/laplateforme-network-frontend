import React from 'react'

const IconWebsite = ({ classNames, href, title }) => {
	return (
		<a href={href} title={title}>
			<svg
				width='72'
				height='72'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={classNames ? classNames.join(' ') : ''}
			>
				<g id='publicon/social/24px'>
					<path
						id='icon/social/publicon/social/24px'
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16 16C16.9 16 17.64 16.58 17.9 17.39C19.2 15.97 20 14.08 20 12C20 8.65 17.93 5.78 15 4.59V5C15 6.1 14.1 7 13 7H11V9C11 9.55 10.55 10 10 10H8V12H14C14.55 12 15 12.45 15 13V16H16Z'
						fill='#000'
					/>
				</g>
			</svg>
		</a>
	)
}

export default IconWebsite
