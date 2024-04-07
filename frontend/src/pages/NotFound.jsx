import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div>
            <h1>Page Not Found....</h1>
            <Link to="/" >Go To Home</Link>
        </div>
    </div>
  )
}

export default NotFound