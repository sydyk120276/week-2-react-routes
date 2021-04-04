import React from 'react'
import { Link } from 'react-router-dom'

// import Head from './head'


const Main = () => {
  return (
    <div>
      {/* <Head title="Hello" /> */}
      <div id="title"> Main </div>
      <Link to="/dashboard/profile/75cbfcf2-1b69-46e1-8455-21fe7befbefa">  Profile  </Link>
      <Link to="/dashboard">  Dashboard  </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
