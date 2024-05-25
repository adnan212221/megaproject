import React from "react";
import "../alljobs/alljobs.scss";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { Link } from "react-router-dom";

const Alljobs = (props) => {
  const { data } = props;

  return (
    <Link to={`/jobs/${data.id}`} className="text-decoration-none">
    <div className="mainjobsection rounded">
      <div className="cardheader">
        <img src={data.company_logo_url} alt="" className="cardimage" />
        <div className="supheader">
          <h4>{data.title}</h4>
          <div className="subheader">
            <FaStar className="logo" />
            <span className="rating">{data.rating}</span>
          </div>
        </div>
      </div>
      <div className="cardheading">
        <div className="twoheading">
        <FaLocationDot className="me-1" /> <span>{data.location}</span>
        <IoIosBriefcase className="ms-2 me-1"/> <span>{data.employment_type}</span>
        </div>
        <div className="annum">
            {data.package_per_annum}
        </div>
      </div>

      <hr />

      <div className="description">
        <h5>Description</h5>
        <p>{data.job_description}</p>
      </div>


    </div>
    </Link>
  );
};

export default Alljobs;
