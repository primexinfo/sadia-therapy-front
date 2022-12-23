

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL} from './api/api'
import { Link } from "react-router-dom";
import axios from "axios";
import "./programsection.css";


const ProgramSection = () => {
  const { id } = useParams();

  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`https://www.admin.sadiatherapy.com/api/programm/${id}`).then((res) => {
      
   
        setProgram(res.data);
        
    });
  }, []);
 
  console.log(program);
  return (
    <>
      <div className="mt-5 myrow">
        <div className="mt-5 mycol">
         
                   <div className="blog-wrap">
                    <header>
              <p className="pt-5 blog-date">{program.created_at} </p>
              <h1 className="prog-title">{program.title}</h1>
            </header>
            <img className="shadow prog-img"
              src={`${IMG_BASE_URL}/services/${program.photo}`}
              alt="cover"
            />
            <p className="blog-desc"  dangerouslySetInnerHTML={{ __html: program.details }}>
           
            </p>
          </div>
            
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
