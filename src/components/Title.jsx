import React from 'react'

export default function Title(props) {
    const { children , extendedClass } = props
  return (
    <div className={`text-3xl ${extendedClass}`}>{children}</div>
  )
}
