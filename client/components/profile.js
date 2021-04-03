import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'


const Prof = () => {
  const { username } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title"> Profile </div>
      <Link to="/dashboard">  Dashboard  </Link>
      <Link to="/dashboard/main">  Main  </Link>
      <div id="username">{username}</div>
    </div>
  )
}

Prof.propTypes = {}

export default Prof
