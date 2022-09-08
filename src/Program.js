import React,{useEffect, useState} from "react";
import ProgramCard from "./ProgramCard";
import Sdata from "./Sdata";
import './infosection.css'
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
      <section className="section mb-5 pb-2">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2 className="text-center service-text-h hero-title"> Need a solution</h2>
                      <p className="text-center service-text-p">Explore my programs</p>
                  </div>
              </div>

              <div className="row mx-auto">
                  {program.map((val, ind) => {
                      return <ProgramCard key={ind} imgsrc={`${IMG_BASE_URL}/services/${val.photo}`} title={val.title} details={val.sub_title} id={`/program/${val.id}`} />;
                  })}
              </div>
          </div>
      </section>
    </>
  );
}

export default Program;