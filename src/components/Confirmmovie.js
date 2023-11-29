import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Confirmmovie(props) {
  return (
    <>

    <div className="movie-result-container">
<p className='mp1'> Your Booking Summary  </p>
<p className='mp2'>Movie Name {props.moviename}</p>
<p className='mp3'>Movie Time {props.movietime}</p>

 <NavLink to="/food"> <p className='mp5' >Do You Want any Beverages  &rarr;</p></NavLink>
 <NavLink to="/finish1"> <p className='mp6' onClick={props.seatmovie}>Finish Booking</p></NavLink>
    </div>
    </>
  )
}
