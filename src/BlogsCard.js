import React from 'react'
import web  from '../src/image/service1.jpg'
import { NavLink } from 'react-router-dom'
import './card.css'

const BlogsCard = (props) => {
  return <>
 
          <div className='col-md-3 mx-auto mb-3'>
          <div className='inner'>
            <div className="h-100 card shadow anim">
              <img src={props.imgsrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h4 className="card-title -bold"><strong>{props.title}</strong></h4>
                  <p className="card-text text-justify" dangerouslySetInnerHTML={{__html:props.details}} ></p>
                  <a href={props.id} className="button">Read more</a>
                </div>
            </div>
            </div>
          </div>
       
  </>
}

export default BlogsCard