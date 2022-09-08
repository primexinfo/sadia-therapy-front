import React,{useEffect, useState} from "react";
import BlogsCard from "./BlogsCard";
import axios from 'axios'
import { api, IMG_BASE_URL } from "./api/api";

function AllBlogs() {
  const [program, setAllProgram] = useState([]);

  useEffect(() => {
    axios
      .get(api.allBlog)
      .then((res) => {
        setAllProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="my-5">
          <h1 className="pt-5 text-center service-text-h"> Know more about the Therapy </h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
                {program.map((val, ind) => {
                  return <BlogsCard key={ind} imgsrc={`${IMG_BASE_URL}/blogs/${val.photo}`} title={val.title} details={val.sub_title} id={`/blog/${val.id}`} />;
              
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
