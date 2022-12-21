import React, {useEffect, useState} from 'react'
import Tdata from './../Tdata';
import "./view.css"
import { Button } from '../Button';
// import Button from './../Button'
import Aos from 'aos';

import 'aos/dist/aos.css'



// import required modules

function View( props) {
  const [people] = useState(Tdata)
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  useEffect(()=>{
    const lastIndex = people.length -1
    if(index<0){
      setIndex(lastIndex)
    }
    if(index>lastIndex){
      setIndex(0)
    }
  },[index, people])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1)
    }, 4000)
    return ()=>{
      clearInterval(slider)
    }
  }, [index])
  return  <>
  
  <section   className='section'>
    <div className="title">
      <h2 className="hero-title">How my therapy work</h2>
    </div>
    <div data-aos="fade-up"  className="section-center">
      {people.map((item, key)=>{
        const{id, img, name, testimoni} = item
        let position = "nextSlide"
        if(key === index){
          position = 'activeSlide'
        }
        if(key === index -1 || (index===0 && key === people.length -1)){
          position = "lastSlide"
        }
        return (
          <article className={position} key={id} >
            <img src={img} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className='text'>{testimoni}</p>
            {/* <Button className='appoinment-button'>make an appointment</Button> */}
          </article>
        )
      })}
      <button className='next' onClick={()=> setIndex(index -1)}>
        <i className='fas fa-arrow-left'></i>
      </button>
      <button className='prev' onClick={()=> setIndex(index +1)}>
        <i className='fas fa-arrow-right'></i>
      </button>
    </div>
    
  </section>
 
   </>
}

export default View