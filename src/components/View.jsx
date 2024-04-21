import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getUploadVideosApi, updateCategoryApi } from '../services/allAPI'
import Category from './Category'


function View({videoUploadStatus,setdragoutVideoStatus}) {
    //js code 
    const [video,setvideo]=useState([])
    const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)

    const getVideo = async()=>{
     const response =    await getUploadVideosApi()
     setvideo(response.data);
    }
    console.log(video);

    const DragOver = (e)=>{
        e.preventDefault()
    }
    const videoDrop =async (e)=>{
        const {categoryId,videoId} =JSON.parse(e.dataTransfer.getData("shareData"))
        console.log(categoryId,videoId);
        //to get all category from backend
        const {data} = await getAllCategoryApi()
        console.log(data);
        //get category which have the same category id

        let selectedCategory = data.find((item)=>item.id==categoryId)
        let result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)

        let reqBody = {
            Category:selectedCategory.category,
            allVideo:result,
            id:categoryId
        }
        await updateCategoryApi(categoryId,reqBody)
        setdragoutVideoStatus(true)
    }
    useEffect(()=>{
        getVideo()
        setdeleteVideoStatus(false)
    },[videoUploadStatus,deleteVideoStatus])
    return (
        <>
           <Row droppable="true" onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e)}>
            {video?.length>0?
            video?.map((item)=>(
            <Col sm={12} md={6} lg={4} xl={3}>
                <VideoCard displayVideo = {item} setdeleteVideoStatus={setdeleteVideoStatus}/>
            </Col>
            ))
            :
            
            <h5 className='mt-5 text-warning'>No Video Uploaded Yet...</h5>}
           </Row>
        </>
    )

}

export default View