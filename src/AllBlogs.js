import React,{useEffect, useState} from "react";
import BlogsCard from "./BlogsCard";
import Sdata from "./Sdata";
import axios from 'axios'
import { api, IMG_BASE_URL } from "./api/api";
import { Button } from "./Button";

function AllBlogs() {
  const [program, setAllProgram] = useState([]);

  useEffect(() => {
    axios
      .get(api.allBlog)
      .then((res) => {
        console.log(res.data.data);
        setAllProgram(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="my-5">
        <h1 className="p-5 text-center service-text-h"> Know more about the Therapy </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {program.map((val, ind) => {
                return <>
                 <BlogsCard key={ind} imgsrc={`${IMG_BASE_URL}/blogs/${val.photo}`} title={val.title} details={val.sub_title} />;
             
              <Button className="button" to={`/blog/${val.id}`} >
                read more
              </Button> 
            </>
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;
