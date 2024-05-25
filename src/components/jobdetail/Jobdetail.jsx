import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie';
import Header from '../header/Header';
import '../jobdetail/jobdetail.scss'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";

const Jobdetail = () => {
    const param = useParams();

    const token = Cookies.get('jwt');
    console.log(token);

    const [vale, setvale] = useState({
        job: [],
        similarjob: [],  
    })
    const [job, setjob] = useState({
      skill: [],
      life: []
    });
    console.log(job);

console.log(vale);
    useEffect(() => {

        const fetchdata = async()=>{
            const url = `https://apis.ccbp.in/jobs/${param.id}`
    
            const options = {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              };

              const response = await fetch(url, options);
              console.log(response);
              const data  = await response.json();
              console.log(data.similar_jobs, 'adna');
              setjob({...job, skill:data.job_details.skills, life:data.job_details.life_at_company })
              setvale({...vale,job:data.job_details, similarjob:data.similar_jobs })
        }

        fetchdata();
    
    }, [])
    

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="job-detail-container">
          <div className="mainjobsection rounded">
            <div className="cardheader">
              <img
                src={vale.job.company_logo_url}
                alt=""
                className="cardimage"
              />
              <div className="supheader">
                <h4>{vale.job.title}</h4>
                <div className="subheader">
                  <FaStar className="logo" />
                  <span className="rating">{vale.job.rating}</span>
                </div>
              </div>
            </div>
            <div className="cardheading">
              <div className="twoheading">
                <FaLocationDot className="me-1" />{" "}
                <span>{vale.job.location}</span>
                <IoIosBriefcase className="ms-2 me-1" />{" "}
                <span>{vale.job.employment_type}</span>
              </div>
              <div className="annum">{vale.job.package_per_annum}</div>
            </div>

            <hr />

            <div className="description">
              <h5>Description</h5>
              <p>{vale.job.job_description}</p>
            </div>

            <div className="skills-section">
              <h5>Skills</h5>
              <div className="skills">
                {job.skill.map((i) => (
                  <div className="skiilss" key={i.name}>
                    <img src={i.image_url} alt="" className="skillimage" />
                    <p className="skillname">{i.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="life-section">
              <h5>Life at Comapny</h5>
              <div className="lifedescription">
                <p className="jobdescription">{job.life.description}</p>
                <img src={job.life.image_url} alt="" className="office" />
              </div>
            </div>
          </div>

          <div className="main-similar-section">
            <h3>Similar Jobs</h3>

            <div className="similar-cards">
              {vale.similarjob.map((i) => (
                <div className="similar-card" key={i.id}>
                  <div className="similar-card-image">
                    <img src={i.company_logo_url} alt="" />
                    <div className="supheader">
                      <h4>{i.title}</h4>
                      <div className="subheader">
                        <FaStar className="logo" />
                        <span className="rating">{i.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="description">
                    <h5>Description</h5>
                    <p>{i.job_description}</p>
                  </div>

                  <div className="twoheading">
                <FaLocationDot className="me-1" />{" "}
                <span>{vale.job.location}</span>
                <IoIosBriefcase className="ms-2 me-1" />{" "}
                <span>{vale.job.employment_type}</span>
              </div>
              
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobdetail