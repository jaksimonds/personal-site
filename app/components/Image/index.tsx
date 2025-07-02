import React, { FC } from 'react'
import NextImage from 'next/image'

export interface IImage {
	className?: string
	src: string
	alt?: string
	width?: number
	height?: number
	loading?: 'eager' | 'lazy'
}

const Image: FC<IImage> = ({ className, src, alt, width, height, loading }) => {
	return (
		<NextImage
			className={className}
			src={src}
			alt={alt || ''}
			width={width || 0}
			height={height || 0}
			loading={loading || 'lazy'}
		/>
	)
}

export default Image
