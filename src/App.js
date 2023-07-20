import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Seat from './components/Seat';
import { useState } from 'react';
import Confirmseat from './components/Confirmseat';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Movie from './components/Movie';
import Confirmmovie from './components/Confirmmovie';
import Food from './components/Food';
import Finish1 from './components/Finish1';
import Final from './components/Final';
function App() { 
  // disble seat 
  // for seat
  const [seatprice , setseatprice]=useState(0)
  
  const seatbook1 =(e)=>{
setseatprice(seatprice+180)
e.target.style.backgroundColor="green"
e.target.style.border="2px solid green"
e.target.style.boxShadow=" 0 5px 50px green"


  }

 
  const seatbook2 =(e)=>{
setseatprice(seatprice+450)
e.target.style.backgroundColor="green"
e.target.style.border="2px solid green"
e.target.style.boxShadow=" 0 5px 50px green"
  }
  const seatbook3 =(e)=>{
setseatprice(seatprice+900)
e.target.style.backgroundColor="green"
e.target.style.border="2px solid green"
e.target.style.boxShadow=" 0 5px 50px green"}

// for movie
const[totalmovieprice , settotalmovieprice] = useState(0)
const [movie , setmovie] =useState(1)
const [moviename , setmoviename]=useState('')
const [movietime , setmovietime]=useState('')


const handlechangemovie =e=>{
  setmovie(e.target.value)
}


const movieprice1 =()=>{
settotalmovieprice(movie*90)
setmoviename('Pathaan')
setmovietime('7.00 AM')

}
const movieprice2 =()=>{
settotalmovieprice(movie*90)
setmoviename('Bajirao Mastani')
setmovietime('9.45 AM')
}
const movieprice3 =()=>{
settotalmovieprice(movie*180)
setmoviename('Ganapath')
setmovietime('11.45 AM')
}
const movieprice4 =()=>{
settotalmovieprice(movie*180)
setmoviename('Hate story-3')
setmovietime('02.10 PM')
}

const movieprice5 =()=>{
settotalmovieprice(movie*270)
setmoviename('Mission Istaanbul')
setmovietime('04.10 PM')
}
const movieprice6=()=>{
settotalmovieprice(movie*360)
setmoviename('Bhoot Police')
setmovietime('06.10 PM')
}

const movieprice7 =()=>{
settotalmovieprice(movie*40)
setmoviename('Heropanti-2')
setmovietime('08.10 PM')
}
// for movie and seat
const [movieseatprice , setmovieseat] = useState(0)
  const seatmovie =()=>{
setmovieseat(seatprice+totalmovieprice)
  }
 // for food

 const [totalfood , settotalfood]=useState(0)
 const [food1,setfood1] =useState()
 const [food2,setfood2] =useState()
 const [food3,setfood3] =useState()
 const [food4,setfood4] =useState()
 const [food5,setfood5] =useState()
 const [food6,setfood6] =useState()
 const [food7,setfood7] =useState()

 const item1 =(e)=>{
  
   settotalfood(totalfood+(movie*90))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
 const item2 =(e)=>{
 
   settotalfood(totalfood+(movie*180))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'

 }
 const item3 =(e)=>{
  
   settotalfood(totalfood+(movie*90))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
 const item4 =(e)=>{

   settotalfood(totalfood+(movie*270))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
 const item5 =(e)=>{
 
   settotalfood(totalfood+(movie*360))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
 const item6 =(e)=>{
  setfood6(movie*450)
   settotalfood(totalfood+(movie*450))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
 const item7 =(e)=>{
 
   settotalfood(totalfood+(movie*270))
e.target.style.backgroundColor='green'
e.target.style.border='2px solid green'
 }
// total
const [all,setall]=useState()
const allinclude=()=>{
setall(totalmovieprice+totalfood+seatprice)
}
  return (
   <div>
    <BrowserRouter basename='/Ticket-App'>
  
    <Navbar/>
    <Routes>
    
   
    <Route exact path='/' element={<Seat seatbook1={seatbook1} seatbook2={seatbook2} seatbook3={seatbook3} seatprice={seatprice}  />}/>
    <Route exact path='/confirmseat' element={
    <Confirmseat seatprice={seatprice}/>}/> 
    <Route exact path='/movie' element={<Movie handlechangemovie={handlechangemovie}movieprice1={movieprice1} movieprice2={movieprice2} movieprice4={movieprice4} movieprice5={movieprice5} movieprice7={movieprice7} movieprice3={movieprice3} movieprice6={movieprice6}/>}/>
    <Route exact path='/confirm-movie' element={<Confirmmovie totalmovieprice={totalmovieprice} moviename={moviename} movietime={movietime} seatmovie={seatmovie} />}/>
    <Route exact path='/food' element={ <Food handlechangemovie={handlechangemovie} item1={item1} item2={item2} item3={item3} item4={item4} item5={item5} item6={item6} item7={item7} allinclude={allinclude}/>} />
    <Route exact path='/finish1' element={  <Finish1 seatprice={seatprice} totalmovieprice={totalmovieprice} movieseatprice={movieseatprice} /> } />
    <Route exact path='/final' element={ <Final all={all} seatprice={seatprice} totalmovieprice={totalmovieprice} totalfood={totalfood}/>}/>
   
 
    </Routes>

   
    </BrowserRouter>
    </div>
  );
}

export default App;
