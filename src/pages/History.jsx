import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'






function History() {

  const [history, setHistory] = useState([]);
  console.log(history);



  useEffect(() => {
    getAllHistory()
  }, []

  )

  const getAllHistory = async () => {
    try {

      const result = await getHistoryAPI();
      setHistory(result.data)

    } catch (err) {
      console.log(err);

    }
  };
  // delete dec 4 ;3.23pm
  const deleteHistory=async(videoId)=>{
    try {
      await deleteHistoryAPI(videoId)
      getAllHistory()
      
    } catch (error) {
      console.log(err);
      
      
    }


  }



  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <h4 className='text-warning m-4'>Watch History</h4>
          <Link className='text-info m-4 fs-5 text-decoration-none' to={'/home'}>Back to <i class="fa-solid fa-house"></i></Link>


        </div>

      </div>
      {/* diplay table dec4 */}

      {history?.length > 0 ?
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Date</th>
              <th>---</th>

            </tr>

          </thead>
          <tbody>
          {
          history?.map(video=>(
            <tr key={video?.id}>
            <td>{video?.id}</td>
            <td>{video?.caption}</td>
            <td><a href={video?.videourl}>{video.videourl}</a></td>
            <td>{video?.formatedDate}</td>
           
            <td><button onClick={()=>deleteHistory(video?.id)} className='btn ' variant="primary"><i class="fa-solid fa-trash" style={{ color: 'red', fontSize:'14px' }}></i></button></td>

          </tr>
          ))
        }
           
          </tbody>
        </table>
       

        :
        <div>
          nothing to display
        </div>
    }
    </>

  )
}

export default History