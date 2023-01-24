import React, {useState, useEffect} from 'react'

import Aos from "aos";
import 'aos/dist/aos.css'
import './quoate.css'
import logo from '../src/image/sadia-logo.png'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit"
  

     
 const Quote = () => {
 
          const [counter, setCounter] = useState(50);
        //increase counter
        const increase = () => {
          setCounter(count => count + 1);
        };

        useEffect(()=>{
            Aos.init({duration:2000})
          },[])
       
     
       
     
  return (
    <section className="vh-5 bg-light">
      <MDBContainer className="py-5 h-10">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="9">
            <MDBCard
              className="text-white"
              style={{ backgroundColor: "#12375c", borderRadius: "15px" , boxShadow: "box-shadow: 0 0.5rem 3rem 0 rgba(238, 0, 0, 0.1);", border:"none" }}
            >
              <MDBCardBody className="p-5">
                <MDBIcon className='qouteicon' data-aos="fade-up" fas icon="quote-left mb-4" size="2x" />

                <p data-aos="fade-up" className="lead">
                “With hypnosis your mind is relaxed, you are fully present and it's easier to access your inner positive emotions and creative mind.”
                </p>

                <hr />

                <div data-aos="fade-up" className="d-flex justify-content-between">
              <img src={logo} alt="" />
                  <MDBTypography tag="h6" className="mb-0">
                    <span
                      className="badge rounded-pill"
                      style={{backgroundColor: "rgba(0,0,0, 0.2)"}}
                    >
                      {counter}
                    </span>{" "}
                    <MDBIcon className='heart-icon' style={{cursor:"pointer",}} onClick={increase} fas icon="heart ms-2" />
                  </MDBTypography>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default Quote