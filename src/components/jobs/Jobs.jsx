import React, { useEffect, useState } from "react";
import "../jobs/jobs.scss";
import Header from "../header/Header";
import Cookies from "js-cookie";
import Alljobs from "../alljobs/Alljobs";
import Profile from "../profilesection/Profile";
import Filter from "../filtersection/Filter";


const Jobs = () => {
  const [vale, setval] = useState({
    joblist: [],
    profilelist: [],
    searchinput: '',
    filterinput: [],
    rangeinput: ''
  });
  const token = Cookies.get("jwt");
  console.log(vale);

  useEffect(() => {
    const fetchdata = async () => {
      const url = `https://apis.ccbp.in/jobs?employment_type=${vale.filterinput}&minimum_package=${vale.rangeinput}&search=${vale.searchinput}`;

      const url1 = 'https://apis.ccbp.in/profile';

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();

      const response1 = await fetch(url1, options);
      const data1 = await response1.json();

      setval({...vale, joblist: data.jobs, profilelist: data1.profile_details });
   
    };
    fetchdata();
  }, [vale.searchinput, vale.filterinput, vale.rangeinput]);

  const onchangekey= (e)=>{
    if(e.key === 'Enter'){
    setval({...vale, searchinput:e.target.value})
    }
  }

  const filterchange = (value, ischked)=>{
   if(ischked){
    setval({...vale, filterinput:[...vale.filterinput,value]})
   }
   else{
    setval({...vale, filterinput: vale.filterinput.filter((ele)=>ele !== value)})
   }
    
  }

  const rangech = (value, ischked)=>{
    if(ischked){
      setval({...vale, rangeinput:value})
    }
    // else{
    //   setval({...vale, rangeinput: vale.rangeinput.filter((ele)=>ele === value)})
    // }
  }

  return (
    <>
      <Header />

      <div className="row">
        <div className="col-12 col-lg-4 filter-section ">
          <div className="mainprofilesection">
            {
             <Profile name={vale.profilelist} />
            } 
            </div>

            <div className="mainfiltersection">
              <Filter filterchange={filterchange} rangech={rangech}  />
            </div>
        
        </div>
        <div className="col-12 col-lg-8 jobs-section">
          <input type="search" className="form-control mb-5" onKeyDown={onchangekey} />
          {vale.joblist.map((i) => {
            return <Alljobs key={i.id} data={i} />
          })}
        </div>
      </div>
    </>
  );
};

export default Jobs;
