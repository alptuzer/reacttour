import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours'

const url = 'https://www.course-api.com/react-tours-project'
function App() {


 

const [loading,setLoading] = useState(true);
const [tours,setTours] = useState([]);

const removeTour = (id) => {
     const newTours = tours.filter((tour) => tour.id !== id)
     setTours(newTours)
}

const fetchTours = async() => {
  setLoading(true);
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  }
  catch (error){
    setLoading(false)
    console.log(error)
  }
}

useEffect(()=>{fetchTours()},[])

if(loading){
  return(<Loading></Loading>)
}

if(tours.length === 0){
  return (
    <main className='refresh-title'>
      <div> No Tour Left</div>
      <button onClick={()=> fetchTours()}>refresh</button>
      </main>
  )

 
}
    return (
      <div className="App">
        <Tours tours={tours} removeTour={removeTour}></Tours>
      </div>
    );
  }


export default App;
