import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './blogcection.css'
import {api, IMG_BASE_URL} from './api/api'

// axios.get('https://www.sadia.primex-bd.com/api/all-slider').then((res)=>{

// console.log(res);
// }).catch(function (error) {
    
//     console.log(error);
//   })

function BlogSection({heading, peragraphOne, reverse, image}) {
	const [allBlog, setAllBlog] = useState([]);
   

	useEffect(() => {
   axios.get(api.allBlog).then(res=>{
	  setAllBlog(res.data.data)
	  console.log(res.data.data);
   }).catch(err=>{
	  console.log(err);
   })
	}, []);
    return (
      <>
	 
  <div className="mt-5 myrow">
	<div className="mt-5 mycol">
		{
			allBlog.map(value=>{
				return <div className="myrow">
				<div className="mycol">
					<header className="blog-header">
						<h2>
							{value.title}
						</h2>
						<p>Created at<span className="date">&nbsp;{value.created_at}</span></p>
					</header>
					<img className='style-img' src={`${IMG_BASE_URL}/blogs/${value.photo}`}/>
					<p className='mt-3' dangerouslySetInnerHTML={{__html: value.details}} ></p>
					<div className="post-btm-bar">
						<button className="likes"><i className="fas fa-thumbs-up"></i> Like</button>
						<button className="replies">Replies <span className="count">42</span></button>
					</div>
				</div>
			</div>
			})
		}
		</div>

	
</div>


		</>
    
    );
}

export default BlogSection;

// import React from "react";
// import Card from "./Card";
// import Sdata from "./Sdata";

// function Program() {
//   return (
//     <>
//       <div className="mt-5">
//         <h1 className="text-center service-text-h"> Explore my all Blogs</h1>
//         <p className="text-center service-text-p">see the latest updates</p>
//       </div>
//       <div className="container-fluid mb-5">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <div className="row gy-4">
//               {Sdata.map((val, ind) => {
//                 return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Program;
