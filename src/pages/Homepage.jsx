import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'


function Homepage() {
  const [videoUploadStatus,setvideoUploadStatus] = useState({})
  const [dragoutVideoStatus,setdragoutVideoStatus] = useState(false)
  
  return (
   <> 
   <div className='my-5 container d-flex'>
    <Add setvideoUploadStatus = {setvideoUploadStatus}/>
   <Link to={'/watch-history'} className='ms-auto' style={{textDecoration:'none'}}> <h4 ><span id='wh'>Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-2 me-3' /></h4></Link>
    
   </div>

   <div className='row mt-5 p-4'>
    <div className="col-md-9">
      <h4>All Videos</h4>
      <View videoUploadStatus = {videoUploadStatus} setdragoutVideoStatus = {setdragoutVideoStatus}/>
    </div>
    <div className="col-md-3 px-4">
      <Category dragoutVideoStatus={dragoutVideoStatus} setdragoutVideoStatus={setdragoutVideoStatus}/>

    </div>

   </div>
   </>
  )
}

export default Homepage