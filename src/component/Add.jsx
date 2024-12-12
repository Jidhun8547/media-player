import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addVideoAPI } from '../Services/allAPI';





function Add({setAddVideoResponse}) {
  // state creation
  const [videoDetails,setVideoDetails]=useState({caption:"",imageurl:"",videourl:""})
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);
  console.log(videoDetails);
  
  const getEmbedUrl=(url)=>{

    if(url==""){
      setIsInvalidUrl(false);
      setVideoDetails({...videoDetails,videourl:""})
      return;

    }
    if(url.includes('v=')){
      const videoId=url.split('v=')[1].slice(0,11);
      setVideoDetails({...videoDetails,videourl:`https://www.youtube.com/embed/${videoId}`})
       setIsInvalidUrl(false);

    }
    else{

      setIsInvalidUrl(true);
      setVideoDetails({...videoDetails,videourl:""})
      
      
      
    }
  }
  // function for upload data
      const uploadData=async()=>{

        const {caption,imageurl,videourl}=videoDetails
        if(caption&&imageurl&&videourl){

         try {
          const result= await addVideoAPI(videoDetails)
          if(result.status>=200&&result.status<300)
          {
            setAddVideoResponse(result.data)
            toast.success(`${result.data.caption} added to your collection`)

            handleClose()

          }
         

          // console.log(result);
          
          
         } catch (error) {
          
          console.log(error);
          
         }
          

        }
        else{
          toast.warning("please enter the field completely")
        }

      }

   
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <h4 className='text-warning'>Upload new video <button className='btn btn-warning fw-bold fs-5 ms-3 rounded-circle' onClick={handleShow}>+</button></h4>
    </div>
    {/* modal */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Video Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details</p>
        <div className='border border-info p-3'>
       {/* video caption */}
        <FloatingLabel 
        controlId="caption"
        label="Video caption"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video caption" />
      </FloatingLabel>
      {/* image url */}
        <FloatingLabel
        controlId="image"
        label="Image url"
        className="mb-3"
      >
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageurl:e.target.value})} type="text" placeholder="Image url" />
      </FloatingLabel>

      
      {/* video url */}
      <FloatingLabel
        controlId="video"
        label="Video url"
        className="mb-3"
      >
        <Form.Control
  onChange={(e) => getEmbedUrl(e.target.value)}
  type="text"
  placeholder="Video URL"
/>
</FloatingLabel>
  {isInvalidUrl&& <div className='text-danger mt-3'>
    Please enter a valid url
  </div> }

        </div>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='btn-info' onClick={uploadData}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add