import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';



function Add({setvideoUploadStatus}) {
    const [show, setShow] = useState(false);
    //state to store video details

    const[video,setvideo]=useState({
        caption:"",
        imageUrl:"",
        embedLink:""

    })
    console.log(video)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getEmbedlink =(e)=>{
        const text = e.target.value
        // console.log(text);
        if(text.startsWith('https://youtu.be/')){
            // console.log(text.slice(17,28))
            const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
            setvideo({...video,embedLink:link})
        }
        else{
            const link = `https://www.youtube.com/embed/${text.slice(-11)}`
            setvideo({...video,embedLink:link}) 
        }
    }
    //function to upload the video
    const handleUpload =async ()=>{
        const {caption, imageUrl, embedLink} = video
        if(!caption || !imageUrl || !embedLink){
           toast.info('Please fill the form completely')
        }
        else{
            const response = await uploadVideoApi(video)
            console.log(response);
            if(response.status>=200 && response.status<300){
                toast.success('Video Uploaded successfully')
                setvideoUploadStatus(response.data)
                setvideo({
                    caption:"",
                    imageUrl:"",
                    embedLink:""  
                })
                handleClose()
            }
            else{
                console.log(response);
                toast.error('Something went wrong')
            }
        //   toast.success('proceed')
        }
    }
    return (
        <>
            <div>
                <h5>Upload New video <FontAwesomeIcon icon={faCloudArrowUp} onClick={handleShow} className='ms-2' /></h5>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Please Fill the Following details</p>
                    <form className='mt-3 border p-3 rounded'>
                        <div className='mb-3'>
                            <input type="text"  placeholder='Enter the Video Caption' className='form-control'onChange={(e)=>setvideo({...video,caption:e.target.value})} />
                        </div>
                        <div className='mb-3'>
                            <input type="text"  placeholder='Enter Image URL' className='form-control' onChange={(e)=>setvideo({...video,imageUrl:e.target.value})} />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='Enter the YouTube Video Link ' className='form-control' onChange={(e)=>getEmbedlink(e)} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="warning" onClick={handleUpload}>
                        Upload
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer theme='colored' position='top-center' autoClose={2000}/>
        </>
    )
}

export default Add