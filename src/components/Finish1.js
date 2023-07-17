import React from 'react'

export default function Finish1(props) {
  return (
    <div>
      <div className="movie-result-container">
<p className='mp1'> Bill Details </p>
<p className='mp2'>Seat Cost {props.seatprice} </p>
<p className='mp3'>Movie Price {props.totalmovieprice}</p>
<p className='mp4'>Total Amount To Pay  <input type="text" value={props.movieseatprice +" Rs"} name="" id="" /> </p>

<p className='mp0'>Thanks For Choosing Us</p>
    </div>
    </div>
  )
}
