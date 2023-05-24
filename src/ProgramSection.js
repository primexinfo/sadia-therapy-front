

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_BASE_URL, BASE_URL} from './api/api'
import { Link } from "react-router-dom";
import axios from "axios";
import "./programsection.css";


const ProgramSection = () => {
  const { id } = useParams();

  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/programm/${id}`).then((res) => {
        setProgram(res.data);
    });
  }, []);
 
  return (
    <>
      <div className="mt-5 myrow">
        <div className="mt-5 mycol">
         
          <div className="blog-wrap row">
                    <header>
              <p className="pt-5 blog-date">{program.created_at} </p>
              <h1 className="prog-title">{program.title}</h1>
            </header>
            <div className="col-12">
               <img className="mx-4 faqimg float-start mb-3" src={`${IMG_BASE_URL}/services/${program.photo}`} alt="service image" />
                <p className="mx-5 p-2" dangerouslySetInnerHTML={{ __html: program.description }} >
                </p>
            </div>
       
            <div className="col-12">
                <img className="mx-5 faqimg float-end mb-3" src={`${IMG_BASE_URL}/image2/${program.image2}`} alt="Service image" />
              <p className="mx-5 p-2" dangerouslySetInnerHTML={{ __html: program.details }}>
              </p>
            </div>
          </div>
            
        </div>
      </div>
    </>
  );
};

export default ProgramSection;
