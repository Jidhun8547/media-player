import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import View from '../component/View'
import Category from '../component/Category'



function Home() {
  const [deleteVideoResponseFromCategory,setDeleteVideoResponseFromCategory]=useState("")
  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [updateCategoryFromView,setUpdateCategoryFromView]=useState("")
  return (
    <>
    <div className='container my-5 d-flex justify-content-between'>
      <Add setAddVideoResponse={setAddVideoResponse}/>
       <Link to={'/history'} className='text-warning text-decoration-none fw-bold fs-5'>Watch History</Link> 
    </div>
    {/* View, Catogory components */}
    <div className='container my-5 row p-5'>
      <div className="col-lg-6">
        <h3 className='text-info'>All videos</h3>
        <View addVideoResponse={addVideoResponse}  deleteVideoResponseFromCategory={deleteVideoResponseFromCategory} setUpdateCategoryFromView={setUpdateCategoryFromView}/>

      </div>
      <div className="col-lg-6">
        <Category setDeleteVideoResponseFromCategory={setDeleteVideoResponseFromCategory} updateCategoryFromView={updateCategoryFromView} />

      </div>

    </div>
    </>
  )
}

export default Home