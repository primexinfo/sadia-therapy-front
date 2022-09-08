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
 
  return (
    <>
      <div className="mt-5 myrow">
        <div className="mt-5 mycol">
          <div className="blog-wrap">
            <header>
              <p className="pt-5 blog-date"> {`Published ${blog.created_at}`} </p>
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
