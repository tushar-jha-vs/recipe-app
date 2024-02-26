import React from 'react'
import "./InnerContainerStyles.css"

const InnerContainer = ({children}) => {
  return (
    <div className='inner-container'>{children}</div>
  )
}

export default InnerContainer