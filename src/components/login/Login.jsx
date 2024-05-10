import React, { useEffect, useState } from 'react'
import '../login/login.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


const Login = () => {
  return (
    <div className='main-login'>
      <BasicExample />
    </div>
  )
}


function BasicExample() {

  const [uservalue, setuservalue] = useState({
    username: '',
    password: '',
    showerrormssg: false,
    errormssg: ''
  });

  const token = Cookies.get('jwt');
//  console.log(token);
  
  const navigate = useNavigate();

  const submithandler = async(e) => {
    e.preventDefault();
    const url =  "https://apis.ccbp.in/login"

    const userdetails = {
      username: uservalue.username,
      password: uservalue.password
    } 

    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(response, 'res');
    if(response.ok === true){
      setuservalue({...uservalue, showerrormssg: false});
      // const {history} = props;
      // history.replace('/')
      navigate('/');
      Cookies.set('jwt', data.jwt_token);

    }
    else{
      setuservalue({...uservalue, showerrormssg: true, errormssg: data.error_msg})
    }
  }

  const changeemail = (e) =>{
    setuservalue({...uservalue, username:e.target.value});
  }

  const emailchange = (e)=>{
    // setuservalue({...uservalue, password:e.target.value });
    setuservalue({...uservalue, password: e.target.value})
  }

  useEffect(() => {
    if(token !== undefined){
      navigate('/');
    }
  
  })
  

  return (
    <Form>
      <div><img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="" /></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={changeemail} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={emailchange} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={submithandler}>
        Login
      </Button>
      {uservalue.showerrormssg ? <p className='text-danger'>{uservalue.errormssg}</p> : null }
    </Form>
  );
}

// export default BasicExample;

export default Login