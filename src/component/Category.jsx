import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryAPI, deleteCategoryAPI, deleteVideoAPI, getCategoryAPI, getSingleVideoAPI, updateCategoryAPI } from '../Services/allAPI';
import Videocard from './Videocard';









function Category({setDeleteVideoResponseFromCategory ,  updateCategoryFromView}) {
  // 2024 dec 5
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCatogory] = useState("")
  console.log(allCategory);

  console.log(categoryName);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // 
  useEffect(() => {
    getAllCatogory()
  }, [updateCategoryFromView])
  // 
  const addCategory = async () => {
    try {
      const result = await addCategoryAPI({ categoryName, allVideos: [] })
      console.log(result.data);
      getAllCatogory()
      handleClose()


    } catch (error) {
      console.log(error);


    }
  }
  const getAllCatogory = async () => {
    try {
      const result = await getCategoryAPI()
      setAllCatogory(result.data)


    } catch (error) {
      console.log(error);


    }

  }
  const deleteCategory=async(categoryId)=>{
    try {
      await deleteCategoryAPI(categoryId)
      getAllCatogory()
      await deleteVideoAPI(videoId)
      
    } catch (error) {
      console.log(error);
      
      
    }
  }
  // 
  // const dropVideo=(e,categoryId)=>{
  //    const videoId= e.dataTransfer.getData("videoId")
  //    console.log(`video draged with the id ${videoId} and dropped in the category ${categoryId}`);
     
  const dropVideo = async(e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId");
    console.log(`Video dragged with the ID ${videoId} and dropped in the category ${categoryId}`);
    try {
      const {data}=await getSingleVideoAPI(videoId)
      console.log(data);
      // 
      const selectedCategory= allCategory?.find(category=>category.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);

      await updateCategoryAPI(categoryId,selectedCategory)
      getAllCatogory()
      

      
      const response=await deleteVideoAPI(videoId)
      setDeleteVideoResponseFromCategory(response)


      

      
    } catch (err) {
      
    }
};
  // prevent dragover (2:54pm dec 6)
  
  // Prevent dragover default behavior
    const dragOverCategory = (e) => {
        e.preventDefault(); }

        // dec9 2:51(return)
        const videoDragStarted=(e,VideoDetails,categoryId)=>{
          
          
           const shareData={VideoDetails,categoryId}
       
           e.dataTransfer.setData("shareData",JSON.stringify(shareData))
        }



  return (
    <>
      <div className='d-flex justify-content-around w-100'>
        <h3 className='text-info'>All category</h3>
        <button onClick={handleShow} className='btn btn-warning  rounded-circle fw-bold'>+</button>

      </div>

      {allCategory?.length > 0 ?
        allCategory?.map(category => (
          // droppable
          <div droppable={true} onDrop={(e)=>dropVideo(e,category?.id)} onDragOver={(e)=>dragOverCategory(e)} className='d-flex justify-content-around border border-3 rounded border-white w-100 mt-5'>
           <div>
              <h5 className='text-warning'>{category.categoryName}</h5>
              <button onClick={()=>deleteCategory(category.id)} className='btn'><i class="fa-solid fa-trash" style={{ color: 'red', fontSize: '14px' }}></i></button>
           </div>
           {/* dec 9 ,1:55 */}
           <div className='row mt-2'>
            {
              category.allVideos?.length>0&&
              category.allVideos.map(video=>(
                <div draggable={true} onDragStart={(e)=>videoDragStarted(e,video,category.id)} key={video?.id} className='col-lg-6'>
              <Videocard VideoDetails={video} insideCategory={true}/>

            </div>

              )

                 
              )
            }
            
            
           </div>
          </div>

        ))
        :
        <div>
          no category added yet
        </div>

      }
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Category Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-3 border-info p-3 rounded'>
            {/* catogory name */}
            <FloatingLabel
              controlId="category"
              label="category"
              className="mb-3"
            >
              <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category name" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addCategory} variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category