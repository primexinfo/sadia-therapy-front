import React from 'react'
import web  from '../src/image/service1.jpg'
import { NavLink } from 'react-router-dom'
import './card.css'

const BlogsCard = (props) => {
  return <>
 
          <div className='col-md-4 mx-auto mb-3'>
            <div className="card anim">
              <img src={props.imgsrc} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text text-justify" dangerouslySetInnerHTML={{__html:props.details}} ></p>
                  <a href={props.id} className="button">Read more</a>
                </div>
            </div>
          </div>
       
  </>
}

export default BlogsCard