// import React, {useEffect, useState} from 'react';
// import axios from 'axios'
// import './blogcection.css'
// import {api, IMG_BASE_URL} from './api/api'

// // axios.get('https://www.sadia.primex-bd.com/api/all-slider').then((res)=>{

// // console.log(res);
// // }).catch(function (error) {

// //     console.log(error);
// //   })

// function BlogSection({heading, peragraphOne, reverse, image}) {
// 	const [allBlog, setAllBlog] = useState([]);

// 	useEffect(() => {
//    axios.get(api.allBlog).then(res=>{
// 	  setAllBlog(res.data.data)
// 	  console.log(res.data.data);
//    }).catch(err=>{
// 	  console.log(err);
//    })
// 	}, []);
//     return (
//       <>

//   <div className="mt-5 myrow">
// 	<div className="mt-5 mycol">
// 		{
// 			allBlog.map(value=>{
// 				return <div className="myrow">
// 				<div className="mycol">
// 					<header className="blog-header">
// 						<h2>
// 							{value.title}
// 						</h2>
// 						<p>Created at<span className="date">&nbsp;{value.created_at}</span></p>
// 					</header>
// 					<img className='style-img' src={`${IMG_BASE_URL}/blogs/${value.photo}`}/>
// 					<p className='mt-3' dangerouslySetInnerHTML={{__html: value.details}} ></p>
// 					<div className="post-btm-bar">
// 						<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
// 						<button className="replies">Replies <span className="count">42</span></button>
// 					</div>
// 				</div>
// 			</div>
// 			})
// 		}
// 		</div>

// </div>

// 		</>

//     );
// }

// export default BlogSection;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL} from './api/api'
import { Link } from "react-router-dom";
import axios from "axios";
import "./blogsection.css";


const BlogSection = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`https://www.admin.sadiatherapy.com/api/blog/${id}`).then((res) => {
      
   
        setBlog(res.data);
        
    });
  }, []);
 
  console.log(blog);
  return (
    <>
      <div className="mt-5 myrow">
        <div className="mt-5 mycol">
         
                   <div className="blog-wrap">
                    <header>
              <p className="pt-5 blog-date">Published {blog.created_at} </p>
              <h1>{blog.title}</h1>
            </header>
            <img
              src={`${IMG_BASE_URL}/blogs/${blog.photo}`}
              alt="cover"
            />
            <p className="blog-desc"  dangerouslySetInnerHTML={{ __html: blog.details }}>
           
            </p>
          </div>
            
        </div>
      </div>
    </>
  );
};

export default BlogSection;
