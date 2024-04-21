import { faArrowLeft, faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoHistoryApi, getAllVideoHistoryApi } from '../services/allAPI'


function Watchhistory() {
  const [deleteHistoryVideostatus,setdeleteHistoryVideostatus]=useState(false)
  const[videoHistory,setvideoHistory]=useState([])


  const getAllVideo = async()=>{
     const response = await getAllVideoHistoryApi()
    //  console.log(response);
     setvideoHistory(response.data);
     
  }
  console.log(videoHistory);
//function to delete the watch history
  const handleHistoryDelete = async(id)=>{
    const response = await deleteVideoHistoryApi(id)
    console.log(response);
    setdeleteHistoryVideostatus(true)
    console.log(deleteHistoryVideostatus);
  }

  useEffect ( ()=>{
    getAllVideo()
    setdeleteHistoryVideostatus(false)
  },[deleteHistoryVideostatus])
  return (
    <>
    
    <div className='d-flex align-items-center mx-3 mb-5 mt-5'>
      <h3>Watch History</h3>
     <Link to={'/home'} className='ms-auto ' style={{textDecoration:'none'}}> <h5 ><FontAwesomeIcon icon={faArrowLeft} className='me-2' /><span id='back' >Back Home</span><FontAwesomeIcon  className='ms-2' icon={faHouse} /></h5></Link>
    </div>

    <div className="row mx-4 mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
       { videoHistory?.length>0?
       <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>CAPTION</th>
              <th>URL</th>
              <th>TIMESTAMP</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
           {videoHistory?.map((item,index)=>
           ( <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
              <td>{item?.timestamp}</td>
              <td><FontAwesomeIcon icon={faTrash} className='btn btn-outline-danger' onClick={()=>handleHistoryDelete(item?.id)} /></td>
            </tr>))}
          </tbody>

        </table>:
        <p className='text-warning fs-2 mt-3'>Watch history is clean</p>
        
      }
      </div>
      <div className="col-md-1"></div>
    </div>
     
    </>
  )
}

export default Watchhistory