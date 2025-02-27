import React from 'react'

export const Button = ({className , disabled , text }) => {
  const [loading, setLoading] = React.useState(false)
  return (
    <button className={className} disabled={disabled} text={text}  >{loading ? 'Loading...' : 'Log out '}</button>
  )
}
