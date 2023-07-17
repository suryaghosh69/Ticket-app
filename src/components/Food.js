import React from 'react'
import { NavLink } from 'react-router-dom'
import movie1 from './popcorn.webp';
import movie2 from './sandwich.webp';
import movie3 from './pepsi.jpg';
import movie4 from './chicken wings.jpg';
import movie5 from './chicken popcorn.jpg';
import movie6 from './biriyani.jpg';
import movie7 from './burger.jpg';
export default function Food(props) {
  return (
   <>
    <div className="moviecont">

    <div className="movie">
    <img src={movie1} alt="" />
   <div className="moviedesc">
    <p> Item Name : Popcorn</p>
    
    <p> Price : 1$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
    <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item1} value="ORDER" />
  </div>
    </div>
    <div className="movie">
    <img src={movie2} alt="" />
   <div className="moviedesc">
    <p>  Item Name : Sandwich</p>
   
    <p> Price : 2$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik' onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item2} value="ORDER" />
   </div>
    </div>
    <div className="movie">
    <img src={movie3} alt="" />
   <div className="moviedesc">
    <p>Item Name : Pepsi</p>
    
    <p> Price : 1$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik' onChange={props.handlechangemovie} name="" id="" />
   <input type="button" className='conf-movie'  onClick={props.item3} value="ORDER" />
  </div>
    </div>
    <div className="movie">
    <img src={movie4} alt="" />
   <div className="moviedesc">
   <p>Item Name : Chicken Wings</p>
  
    <p> Price : 3$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item4} value="ORDER" />
  </div>
    </div>
    <div className="movie">
    <img src={movie5} alt="" />
   <div className="moviedesc">
   <p>Item Name :Chicken Popcorn</p>
  
    <p> Price : 4$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item5} value="ORDER" />
  </div>
    </div>
    <div className="movie">
    <img src={movie6} alt="" />
   <div className="moviedesc">
   <p>Item Name :Biriyani</p>
  
    <p> Price : 5$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item6} value="ORDER" />
   </div>
    </div>
    <div className="movie">
    <img src={movie7} alt="" />
   <div className="moviedesc">
   <p>Item Name :Burgur</p>
    <p> Price : 3$</p>
   </div>
   <div className="moviebooking">
    <p>Select no of items</p>
   <input type="number" className='no-mov-tik'onChange={props.handlechangemovie}  name="" id="" />
   <input type="button" className='conf-movie' onClick={props.item7} value="ORDER" />
   </div>
    </div>
    </div>

<NavLink to="/final"> <p className='complete-order' onClick={props.allinclude}>Finish Booking</p></NavLink>

   </>
  )
}
