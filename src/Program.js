import React,{useEffect, useState} from "react";
import ProgramCard from "./ProgramCard";
import Sdata from "./Sdata";
import axios from 'axios'
import { api, IMG_BASE_URL } from "./api/api";

function Program() {
  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios
      .get(api.frontProgramm)
      .then((res) => {
        console.log(res.data);
        setProgram(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="my-5">
        <h1 className="text-center service-text-h"> need a solution</h1>
        <p className="text-center service-text-p">explore my programs</p>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {program.map((val, ind) => {
                return <ProgramCard key={ind} imgsrc={`${IMG_BASE_URL}/services/${val.photo}`} title={val.title} details={val.sub_title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Program;