import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Confirmseat(props) {
  return (
    <div>
        <div className="seat-alert">
            Hey your Seat Has Booked !
        </div>
      <div className="seat-conclution">
Total Seat Price
<input type="text" name="" className='seatprice' id="" value={props.seatprice} />
<div className="for-movie">
    Now choose your movie
</div>
<NavLink to="/movie">
<input type="button" className='for-movie-btn' value="click for movie"/>
</NavLink>
</div>
    </div>
  )
}
