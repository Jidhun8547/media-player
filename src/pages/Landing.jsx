import React from 'react'
import landingImage from '../assets/videoplayer.gif'
import card1 from '../assets/first.png'
import card2 from '../assets/second.png'
import card3 from '../assets/third.png'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
    <div className='container mt-5'>
      <div className='row align-items-center mt-5'>
        <div className='col-lg-5'>
          <h3 style={{fontFamily:"Rochester"}}>Welcome to <span className='text-warning'>media player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quia pariatur velit accusamus ipsa fuga, aperiam similique recusandae rerum laborum facere impedit itaque error blanditiis obcaecati quasi reprehenderit ad culpa.</p>
          <Link to={'/home'}><button type="button" className="btn btn-outline-success mt-5">Get started</button></Link>

           </div>

           <div className='col-lg'>

           </div>

           <div className='col-lg-6'>
            <img src={landingImage} alt="" />

           </div>

      </div>


    </div>
    {/* features */}
    <div className='container mt-5'>
      <h3 className='text-warning text-center' style={{fontFamily:"Rochester"}}>Features</h3>

      <div className="row">
        <div className="col-lg-4">
        <Card style={{ width: '18rem', height:'400px' }} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}} src={card1} />
      <Card.Body>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          User can upload,view and remove the video
        </Card.Text>
        
      </Card.Body>
    </Card>
        
        </div>
        
        <div className="col-lg-4">
        <Card style={{ width: '18rem', height:'400px' }} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}} src={card2} />
      <Card.Body>
        <Card.Title>Catogorize Videos</Card.Title>
        <Card.Text>
          User can catogorize the videos by drag and drop features
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
        <div className="col-lg-4">
        <Card style={{ width: '18rem' ,height:'400px'}} className='p-3'>
      <Card.Img variant="top" style={{height:'250px'}}src={card3} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          User can manages the watch history of all videos
        </Card.Text>
        
      </Card.Body>
    </Card>

        </div>
      </div>

    </div>
    {/* footer box section */}
    <div className='border border-3 border-white rounded p-3 m-5 container'>
      <div className='row mt-3'>
        <div className='col-lg text-white'>
          <h5 className='text-warning fs-3 text-center'style={{fontFamily:"Rochester"}} >Simple Fast and Powerful</h5>
          <div className='mb-5'>
            <p><span className='fs-5'>Play everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem natus esse deserunt ea. Temporibus dignissimos quidem quas sunt ab mollitia delectus quasi deserunt ut dolor earum, eius, officia animi doloremque.</p></div>
         

          <div className='mb-5'><p><span className='fs-5'>Categorize videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsum quaerat consectetur unde sapiente error aperiam repudiandae praesentium ratione tempora corrupti deleniti vitae asperiores adipisci, eos necessitatibus numquam illo velit.</p></div>

          <div className='mb-5'><p><span className='fs-5'>Manage History :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus soluta dolor dolore, officia odio dignissimos, dolorem, voluptate ea facere similique beatae nobis eligendi laboriosam impedit animi incidunt consequuntur debitis?</p></div>
        </div>
        <div className='col-lg'>
        <iframe className='m-5' width="560" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=I9WwcQbC1SPnqT3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>

    </div>
    </>
    
  )
}

export default Landing