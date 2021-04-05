import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'


const Dash = () => {
  return (
    <div>
      <Head title="Dash" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Dashboard </div>
        </div>
        <div className="bg-indigo-900 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/profile/75cbfcf2-1b69-46e1-8455-21fe7befbefa">  Go To Profile  </Link>
        </div>
        <div className="bg-indigo-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/main">  Go To Main  </Link>
        </div>
      </div>
    </div>
  )
}

Dash.propTypes = {}

export default Dash
