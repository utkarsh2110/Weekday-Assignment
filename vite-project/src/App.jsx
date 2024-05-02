import { useState } from 'react'
import VerticalNav from './components/VerticalNav'
import Titlebar from './components/Titlebar'
import './App.css'
import Job from './components/Job'

export default function App() {
  return (

    <div className='app-main'>
      <VerticalNav />
      <div className="main">
        <Titlebar></Titlebar>
        <div className='job-grid'>
          <Job/>
        </div>
      </div>
    </div>



  )
}
