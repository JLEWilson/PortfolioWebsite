import React, { ElementType, ReactNode } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'body-small' | 'small'

interface Props {
  variant: Variant
  children: ReactNode
  className?: string
  as?: ElementType
}

const tags: Record<Variant, ElementType> = {
  'h1': 'h1',
  'h2': 'h2',
  'h3': 'h3',
  'h4': 'h4',
  'h5': 'h5',
  'body': 'p',
  'body-small': 'p',
  'small': 'span',
}

const sizes: Record<Variant, string> = {
  'h1': 'xl:text-6xl lg:text-5xl md:text-4xl text-3xl',
  'h2': 'xl:text-5xl lg:text-4xl md:text-3xl text-2xl',
  'h3': 'xl:text-4xl lg:text-3xl md:text-2xl text-xl',
  'h4': 'xl:text-3xl lg:text-2xl md:text-xl text-lg',
  'h5': 'xl:text-2xl lg:text-xl md:text-lg text-md',
  'body': 'xl:text-xl lg:text-lg md:text-md text-sm',
  'body-small': 'xl:text-lg lg:text-md md:text-sm text-xs',
  'small': 'xl:text-md lg:text-sm md:text-xs text-xs',
}

const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant]
  const Tag = as || tags[variant]

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
}

export default Typography
