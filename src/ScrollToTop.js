import React, {useState, useEffect} from 'react'
// import {useWindowScroll} from 'react-use'
import {useWindowScroll} from "react-use"
import './scrolltotop.css'
function ScrollToTop() {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        if(pageYOffset>400){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[pageYOffset])

    const scrollToTop =()=> window.scrollTo({top:0, behavior:"smooth"})

    if(!visible){
        return false
    }
  return (
    <div className='scroll-to-top cursor-pointer text-center' onClick={scrollToTop}>
        <i className='fas fa-chevron-up i'></i>
    </div>
  )
}

export default ScrollToTop