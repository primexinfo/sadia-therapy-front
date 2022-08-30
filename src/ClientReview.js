// import React, {useEffect, useState} from 'react'
// import { api, BASE_URL } from "./api/api";
// import Tdata from './Tdata';
// import "./ClientReview.css"
// import { Button } from './Button';
// import {GET_TESTIMONIAL} from './api/services';
// import axios from 'axios';
// // import Button from './../Button'

// const data = axios.get(`${BASE_URL}/testimonial`)
// console.log(data);

// // import required modules

// function ClientReview( props) {
//   const [people] = useState(data)
//   const [index, setIndex] = useState(0)

//   useEffect(()=>{
//     const lastIndex = people.length -1
//     if(index<0){
//       setIndex(lastIndex)
//     }
//     if(index>lastIndex){
//       setIndex(0)
//     }
//   },[index, people])

//   useEffect(()=>{
//     let slider = setInterval(()=>{
//       setIndex(index+1)
//     }, 4000)
//     return ()=>{
//       clearInterval(slider)
//     }
//   }, [index])
//   return  <>

//   <section className='section'>
//     <div className="title">
//       <h2>Testimonials</h2>
//     </div>
 
//     <div className="section-center">

//       {GET_TESTIMONIAL.map((item, key)=>{
//         const{id, photo, title, details} = item
//         let position = "nextSlide"
//         if(key === index){
//           position = 'activeSlide'
//         }
//         if(key === index -1 || (index===0 && key === people.length -1)){
//           position = "lastSlide"
//         }
//         return (
//           <article className={position} key={id} >
//             <img src={photo} alt={title} className="person-img" />
//             <h4>{title}</h4>
//             <p className='text'>{details}</p>
//             {/* <Button className='appoinment-button'>make an appointment</Button> */}
//           </article>
//         )
//       })}
//       <button className='next' onClick={()=> setIndex(index -1)}>
//         <i className='fas fa-arrow-left'></i>
//       </button>
//       <button className='prev' onClick={()=> setIndex(index +1)}>
//         <i className='fas fa-arrow-right'></i>
//       </button>
//     </div>
    
//   </section>
 
//    </>
// }

// export default ClientReview