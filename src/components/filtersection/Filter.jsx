import React from 'react'
import '../filtersection/filter.scss'
// import Form from 'react-bootstrap/Form';

const Filter = (props) => {

  const {filterchange, rangech} = props;

  const elemnt = [
    {
      label: 'Fulltime',
      values: 'FULLTIME',
    },
    {
      label: 'Part-Time',
      values: 'PARTTIME'
    },
    {
      label: 'Freelance',
      values: 'FREELANCE'
    },
    {
      label: 'internship',
      values: 'INTERNSHIP'
    }
  ]

  const elemnt1 = [
    {
      label: '10 LPA and above',
      values: 1000000,
    },
    {
      label: '20 LPA and above',
      values: 2000000,
    },
    {
      label: '30 LPA and above',
      values: 3000000,
    },
    {
      label: '40 LPA and above',
      values: 4000000,
    }
  ]

  const filterchangess = (e)=>{
    filterchange(e.target.value ,e.target.checked);
    console.log(e.target);
  }

  const rangechange = (e)=>{
    rangech(e.target.value ,e.target.checked);
    console.log(e.target.value);
  }

  // const clickvalue = ()=>{
  //   console.log('click');
  // }
    
  return (
    <div className="main-filt">
      <hr className="borderbottom" />
      <div className="employemnt ms-3">
        <div className="list-group">
          {elemnt.map((i) => {
            return (
              <label className="list-group-item" key={i.values}>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  value={i.values}
                  onChange={filterchangess}
                />
                {i.label}
              </label>
            );
          })}
        </div>
        <hr className="borderbottom" />

       <div className='radiofilter'>

        
        
          {
            elemnt1.map((i)=>{
              return (
              
                <div className="form-check" key={i.values}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value={i.values}
                    onChange={rangechange}
                  />
                  <label className="form-check-label" htmlFor={i.values}>
                    {i.label}
                  </label>
                  </div>
              
              );
            })
          }

</div>
        
      </div>
      <hr className="borderbottom" />
    </div>
  );
}




export default Filter