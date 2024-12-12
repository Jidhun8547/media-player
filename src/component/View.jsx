import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { addVideoAPI, getSingleCategoryAPI, getVideoAPI, updateCategoryAPI } from '../Services/allAPI'






function View({addVideoResponse,deleteVideoResponseFromCategory,setUpdateCategoryFromView}) {
   const [allVideos,setAllVideos]=useState([])
   const [deleteVideoResponse,setDeleteVideoResponse]=useState('')
   console.log(allVideos);

   useEffect(()=>{
    getAllVideos()
   },[addVideoResponse,deleteVideoResponse,deleteVideoResponseFromCategory]

  )

   

  const getAllVideos=async()=>{
    try {
      const result=await getVideoAPI()
    if(result.status>=200&&result.status<300){
      setAllVideos(result.data)
    }
    // console.log(result);
    
      
    } catch (error) {
      console.log(error);
      
      
    }

  }
  // dec 9
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
  const dropCategoryVideo=async(e)=>{
   const {VideoDetails,categoryId} = JSON.parse(e.dataTransfer.getData("shareData"))
   console.log(` video details;${VideoDetails}, Category :${categoryId}`);
    try {

      const {data}=await getSingleCategoryAPI(categoryId)
      // console.log(`data:${data}`);
      const updatedCategoryAllvideos=data.allVideos.filter(item=>item.id!=VideoDetails.id)
      
      const {id,categoryName}=data
      const response=await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryAllvideos})
      setUpdateCategoryFromView(response)
      const result= await addVideoAPI(VideoDetails)
     getAllVideos()

    } catch (error) {
      
      console.log(error);
      
    }
   
  } 
  return (
    <>
    {/* DEC 9 ,2.59 */}
    <Row droppable={true} onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>dropCategoryVideo(e)} className=' p-5'>
      
      {
        allVideos?.length>0?
        allVideos.map(video=>(
        <Col key={video?.id} lg={4} sm={6} xs={12}>
          <Videocard VideoDetails={video} setDeleteVideoResponse={setDeleteVideoResponse}
          deleteVideoResponseFromCategory={deleteVideoResponseFromCategory} />
          </Col>
          )) :
      <div className='text-danger text-center'>
        Nothing to display
      </div>

      }
    </Row>
    </>
  )
}

export default View