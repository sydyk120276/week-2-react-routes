import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'


const Main = () => {
  return (
    <div>
      <Head title="Main" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title"> Main </div>
        </div>
        <div className="bg-indigo-900 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard/profile/75cbfcf2-1b69-46e1-8455-21fe7befbefa">  Go To Profile  </Link>
        </div>
        <div className="bg-indigo-700 text-white font-bold rounded-lg border shadow-lg p-10">
          <Link to="/dashboard">  Go To Root  </Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
