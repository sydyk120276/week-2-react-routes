import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'


const Prof = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Prof" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-green-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Profile </div>
          <div id="username"> {user} </div>
        </div>
        <div className="bg-indigo-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard">  Go To Root  </Link>
        </div>
        <div className="bg-indigo-900 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/main">  Go To Main  </Link>
        </div>      
      </div>
    </div>
  )
}

Prof.propTypes = {}

export default Prof
