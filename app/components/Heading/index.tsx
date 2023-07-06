import { FC } from "react"
import { oswald } from "../../fonts"

interface IHeading {
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
  const headingClasses = `${className} ${level < 3 ? oswald.className : ''}`

  return (
    <HeadingTag className={headingClasses}>{children}</HeadingTag>
  )
}

export default Heading