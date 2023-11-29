import React from 'react'
import movie1 from './pathaan.webp';
import movie2 from './bjirao-mastani.jpg';
import movie3 from './Ganapath.jpeg';
import movie4 from './hate-story.jpg';
import movie5 from './mission-istanbul.jpg';
import movie6 from './bhoot-police.jpg';
import movie7 from './Heropanti-2.jpg';
import { NavLink } from 'react-router-dom'
export default function Movie(props) {
  return (
    <>
    <div className="moviecont">

    <div className="movie">
    <img src={movie1} alt="" />
   <div className="moviedesc">
    <p> Movie Name : Pathaan</p>
    <p> Timing : 7.00 AM -9.30 AM </p>
    {/* <p> Price : 1$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice1} value="BOOK" />
   </NavLink></div>
    </div>
    <div className="movie">
    <img src={movie2} alt="" />
   <div className="moviedesc">
    <p>  Movie Name : Bajirao Mastani</p>
    <p> Timing : 9.45 AM -11.30 AM</p>
    {/* <p> Price : 2$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik' onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice2} value="BOOK" />
  </NavLink> </div>
    </div>
    <div className="movie">
    <img src={movie3} alt="" />
   <div className="moviedesc">
    <p> Movie Name : Ganapath</p>
    <p> Timing : 11.45 AM -2.00 PM</p>
    {/* <p> Price : 1$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik' onChange={props.handlechangemovie} name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie'  onClick={props.movieprice3} value="BOOK" />
   </NavLink></div>
    </div>
    <div className="movie">
    <img src={movie4} alt="" />
   <div className="moviedesc">
   <p> Movie Name : Hate story-3</p>
    <p> Timing : 2.10 PM -4.00 PM</p>
    {/* <p> Price : 3$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice4} value="BOOK" />
   </NavLink></div>
    </div>
    <div className="movie">
    <img src={movie5} alt="" />
   <div className="moviedesc">
   <p> Movie Name :Mission istaanbul</p>
    <p> Timing : 4.10 PM -6.00 PM</p>
    {/* <p> Price : 4$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice5} value="BOOK" />
   </NavLink></div>
    </div>
    <div className="movie">
    <img src={movie6} alt="" />
   <div className="moviedesc">
   <p> Movie Name :Bhoot police</p>
    <p> Timing : 6.10 PM -8.00 PM</p>
    {/* <p> Price : 2$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice6} value="BOOK" />
  </NavLink> </div>
    </div>
    <div className="movie">
    <img src={movie7} alt="" />
   <div className="moviedesc">
   <p> Movie Name :Heropanti-2</p>
    <p> Timing : 8.10 PM -10.00 PM</p>
    {/* <p> Price : 0.5$</p> */}
   </div>
   <div className="moviebooking">
    {/* <p>Select no of ticket</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" /> */}
    <NavLink to="/confirm-movie"><input type="button" className='conf-movie' onClick={props.movieprice7} value="BOOK" />
  </NavLink> </div>
    </div>
    </div>

    
    </>
  )
}
