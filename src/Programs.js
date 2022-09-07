import React,{useEffect, useState} from "react";
import ProgramCard from "./ProgramCard";
import Sdata from "./Sdata";
import axios from 'axios'
import { api, IMG_BASE_URL } from "./api/api";

function Programs() {
  const [program, setAllProgram] = useState([]);

  useEffect(() => {
    axios
      .get(api.allProgramm)
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
        <h1 className="pt-5 text-center service-text-h"> Need a solution</h1>
        <p className="text-center service-text-p">Explore my programs</p>
      </div>
      <div className="container-fluid">
        <div className="row mx-auto">
              {program.map((val, ind) => {
                return <ProgramCard key={ind} imgsrc={`${IMG_BASE_URL}/services/${val.photo}`} title={val.title} details={val.sub_title} id={`/program/${val.id}`} />;
              })}
        </div>
      </div>
    </>
  );
}

export default Programs;
