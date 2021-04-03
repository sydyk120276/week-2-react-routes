import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'


const Dash = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/75cbfcf2-1b69-46e1-8455-21fe7befbefa">  Profile  </Link>
      <Link to="/dashboard/main">  Main  </Link>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
