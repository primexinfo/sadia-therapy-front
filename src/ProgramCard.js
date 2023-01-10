import React,{useState, useEffect} from 'react'
import './card.css'
import { Button } from './Button'

const ProgramCard = (props) => {

  return <>
 
          <div className='col-md-3 mx-auto mb-3 padding'>
            <div className='inner shadow'>
            <div className="h-100 card shadow anim">
              
                 <img src={props.imgsrc} className="card-img-top" alt="..."/>
             
             
                <div className="card-body">
                  <h5 className="card-title"><strong>{props.title}</strong></h5>
                  <p className="card-text text-justify" dangerouslySetInnerHTML={{__html:props.details}} ></p>
                  <Button to={props.id} className="home-button">Read more</Button>
                </div>
            </div> 
            </div>
          </div>
       
  </>
}

export default ProgramCard