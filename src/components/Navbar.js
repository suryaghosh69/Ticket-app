import React from 'react'
import movie1 from './movie.jpg';
import movie2 from './movie2.jpg';
export default function Navbar() {
  return (
    <>
   <div className="navbar">
    <div className="pic1">
       <img src={movie1} alt="" />
    </div>
    <div className="navdesc">
 <p className='p1'> Welcome To Online Ticket Booking Service </p>
 <p className='p2'> The best place to book your movie ticket</p>
 </div>
 <div className="pic2">
 <img src={movie2} alt="" />
 </div>
   </div>
   </>
  )
}
