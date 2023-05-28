import React, {useEffect, useState} from "react";
import axios from "axios";
import { api, IMG_BASE_URL } from "./api/api";



const Testimonial = () => {
    document.title = "Testimonial";
    const [testimonial, setTestimonial] = useState([])
    useEffect(()=>{
        axios.get(api.testimonial).then((res)=>{
            setTestimonial(res.data)
            console.log(res.data);
        })
    }, [])
    const [index, setIndex] = useState(0)

    useEffect(()=>{
    const lastIndex = testimonial.length -1
    if(index<0){
        setIndex(lastIndex)
    }
    if(index>lastIndex){
        setIndex(0)
    }
    },[index, testimonial])

    useEffect(()=>{
    let slider = setInterval(()=>{
        setIndex(index+1)
    }, 4000)
    return ()=>{
        clearInterval(slider)
    }
    }, [index])
    return (
        <>
            <section className="section mt-5">
                <div className="title mt-5">
                    <h2 className="mt-5">Testimonial</h2>
                </div>
                    <div className="section-center">
                        {testimonial.map((item, key)=>{
                            console.log(item)
                        let position = "nextSlide"
                        if(key === index){
                            position = "activeSlide"
                        }
                        if(key === index -1 || (index===0 && key === testimonial.length -1)){
                            position = "lastSlide"
                        }
                        return (
                            <article className={position} key={item.id} >
                                <img src={`${IMG_BASE_URL}/testimonials/${item.photo}`} alt={item.title} className="person-img" />
                                <h4>{item.title}</h4>
                                <p className="text">{item.subtitle}</p>
                                <p dangerouslySetInnerHTML={{ __html: item.details }} className="pb-5"></p>
                            </article>
                        )
                        })}
                        <button className="next" onClick={()=> setIndex(index -1)}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button className="prev" onClick={()=> setIndex(index +1)}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
            </section>
        </>
    );
}


export default Testimonial;