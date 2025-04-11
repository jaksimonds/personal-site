import React, { FC } from 'react'

export interface IHeading {
  level: number
  className?: string
  children: any
}

const Heading: FC<IHeading> = ({
  level,
  className,
  children
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <HeadingTag className={className}>{children}</HeadingTag>
  )
}

export default Heading