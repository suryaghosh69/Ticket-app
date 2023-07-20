import React from 'react'
import { useState ,useEffect ,useRef } from 'react';
import { NavLink } from 'react-router-dom'
export default function Seat(props) {
    
//   useEffect(() => {
//     const ref = useRef(null);
//     const row1 = Array.from(
//       document.getElementsByClassName('row1'))
//       row1.forEach((e)=>{
// e.target.addEventListener('click',props.seatbook1
// )
//       })
    
//     console.log(row1);
//   }, []);

  return (
    <>
<p className='seatheading'> BOOK YOUR SEAT NOW!</p><br />
<p className='subhead'>You can book multiple seat</p>
    <div className="seat">
        <div className="block">

        <div className="branch">
            <div className="row row1">
                <input type="button"   value=""   onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
                <input type="button"   value="" onClick={props.seatbook1}/>
              
            </div>
           
            <div className="row row1">
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
            <input type="button"   value="" onClick={props.seatbook1}/>
              
            </div>
        </div> <p className='seat-desc'> C-Grade :: Price 2$ // comfortness :: lower // Seat-Quality:: Average</p>
        <div className="branch">
        <div className="row row1"> 
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
        <input type="button" value="" onClick={props.seatbook1}/>
               
                </div>
            <div className="row row1">
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
            <input type="button" value="" onClick={props.seatbook1}/>
               
                </div>
        </div>
        </div>
        <div className="block">
      
        <div className="branch">
        <div className="row">  
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
        <input type="button" value="" onClick={props.seatbook2}/>
               
               </div>
            <div className="row">  
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                <input type="button" value="" onClick={props.seatbook2}/>
                
                </div>
        </div>
        <p className='seat-desc'> B-Grade :: Price 5$ // comfortness :: Medium // Seat-Quality:: Good</p>
        <div className="branch">
        <div className="row"> 
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
                <input type="button" value="" onClick={props.seatbook2} />
               
               </div>
            <div className="row">
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
            <input type="button" value="" onClick={props.seatbook2} />
              
              </div></div></div>
        <div className="block">
        
        <div className="branch">
        
        <div className="row"> 
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
               
               </div>
            <div className="row">
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
              
                </div>
               
        </div>
        <p className='seat-desc'> A-Grade :: Price 10$ // comfortness :: SO-Comfy // Seat-Quality:: Great</p>
        <div className="branch">
       
        <div className="row"> 
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
        <input type="button" value="" onClick={props.seatbook3} />
             
             </div>
                
            <div className="row">
            <input type="button" value="" onClick={props.seatbook3 } />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
            <input type="button" value="" onClick={props.seatbook3} />
                
               </div>
               
            </div>
          </div>
            
</div>
<div className="confirm-seat-book">
   <NavLink to="/confirmseat"> <input type="button" disabled={!props.seatprice}  className='confirm-seat' value="Confirm Booking" /></NavLink>
</div>

    </>
  )
}
