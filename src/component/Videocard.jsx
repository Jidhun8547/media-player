import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { deleteVideoAPI, saveWatchHistoryAPI } from '../Services/allAPI';



function Videocard({VideoDetails,insideCategory}) {
  
  console.log(VideoDetails);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // watch history dec4
   const handleShow =async() =>{
       const {caption,videourl}=VideoDetails
        const localTime=new Date()
        const formatedDate=localTime.toLocaleDateString()
        console.log(formatedDate);

        const historyDate={caption,videourl,formatedDate}
        try {
          await saveWatchHistoryAPI(historyDate)
        } catch (error) {
          console.log(error);
          
          
        }
        
       



    setShow(true);
  }

  const deleteVideo=async(videoId)=>{
    try {
      const result= await deleteVideoAPI(videoId)
      setDeleteVideoResponse(result.data)
      console.log(result);

      
      
    } catch (error) {
      console.log(error);
      

      
    }
  }
  
    
  // dec 6 2:32}
  const dragVideoStarted = (e,videoId) => {
    console.log(`onDrag started with video id: ${videoId}`);

    //dec6 2:37
    e.dataTransfer.setData("videoId",videoId)
};

  
  return (
    <>
    <div>
    <Card style={{ width: '' }} draggable={true} onDragStart={(e)=>dragVideoStarted(e,VideoDetails?.id)}>
      <Card.Img onClick={handleShow} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} variant="top" src={VideoDetails?.imageurl} />
      <Card.Body>
        <Card.Title className=' d-flex align-item-center justify-content-center'>
          <p className='ms-2'>{VideoDetails?.caption}</p>
          {
            !insideCategory&&
            <button onClick={()=>deleteVideo(VideoDetails?.id)} className='btn '><i class="fa-solid fa-trash" style={{color:'red', fontSize:'22px'}}></i></button>
          }
          </Card.Title>
        
        
      </Card.Body>
    </Card>
      </div>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{VideoDetails?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="770" height="377" src={`${VideoDetails?.videourl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
        
      </Modal>
      </>
   
  )
}


export default Videocard