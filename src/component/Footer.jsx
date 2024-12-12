import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'250px'}} className='container mt-5 w-100' >
      <div className='d-flex justify-content-between flex-wrap'>
        <div style={{width:'400px'}}>
        <h5>
          <i className="fa-solid fa-music" ></i>
          Media Player
        </h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio a nisi error, minus eligendi similique eos illo molestiae! Natus aliquam repellat consectetur cumque corrupti commodi, voluptas aspernatur qui enim officiis!</p>
        <p>Code is lisenced by luminar</p>
        <p>currently v5.3.5</p>

        </div>
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home</Link>
          <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>History</Link>

        </div>

        <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <Link to={''} style={{textDecoration:'none', color:'white'}}>React</Link>
          <Link to={''} style={{textDecoration:'none', color:'white'}}>Reacr Bootstrap</Link>
          <Link to={''} style={{textDecoration:'none', color:'white'}}>React Router</Link>

        </div>

        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='enter the email' />
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>

          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a href="" className='text-white fs-5'> <i class="fa-brands fa-facebook"></i></a>
            <a href="" className='text-white fs-5'> <i class="fa-brands fa-twitter"></i></a>
            <a href="" className='text-white fs-5'> <i class="fa-brands fa-instagram"></i></a>
            <a href="" className='text-white fs-5'> <i class="fa-brands fa-linkedin"></i></a>
            <a href="" className='text-white fs-5'> <i class="fa-brands fa-github"></i></a>
            <a href="" className='text-white fs-5'> <i class="fa-solid fa-phone"></i></a>




          </div>
          

        </div>

      </div>
      <p className='text-center mt-4 fw-fold'>Copyright ;Aug batch 2024,Media player. Built with React</p>
    </div>
  )
}

export default Footer