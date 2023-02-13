import Form from 'react-bootstrap/Form';
import './LoginForm.css';
import SchoolLogoImg from'/home/surajd/Documents/React/NewSchool/newSchoolMgt/schoolmgt/src/Images/schoolLogo.png';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from 'react';

 const LoginPage=()=>{

  const navigate = useNavigate();

    const [loginState, setLoginState] = useState({
        email: "",
        password: "",
        checkMeOut: false,
      });

      const Login=()=>{
        localStorage.setItem("loginRout",true);
       
      }

      
      

      
  
         console.log("My Email ID is "+loginState.email);


         const loginEmail=loginState.email;   
         const loginPass=loginState.password;

         localStorage.setItem("loginUser",loginEmail);
         localStorage.setItem("loginPassword",loginPass);

         const expEmail="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

     const NavigateUser=(e)=>{
              
         e.preventDefault();

         console.log("Inside Navigate");
            if(loginEmail.match(expEmail)&&loginPass.length>7){

              navigate("/HomePage/"); 

            }
              
     };
      

    return(

      
        //<h1>Hello React</h1>


     <div>
       <div className='' >
         <img
         id='LoginImageId1'
         className='bootstrap-logo' 
         src={SchoolLogoImg}
         alt='School Logo'/> 
      </div>

      <p id='loginTextId'>Login Please</p>

    <div className="container my-5 " id='blokId'>


    {/* {JSON.stringify(loginState)} */}


      <form onSubmit={NavigateUser}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder='abc@gmail.com'
            required="required"
            //aria-describedby="emailHelp"


            onChange={(event) => {
              const value = event.target.value;
  
            setLoginState({ ...loginState, email: value });
            }}
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder='*************'
            required="required"
            onChange={(event) => {
              const value = event.target.value;
              setLoginState({ ...loginState, password: value });
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(event) => {
              const value = event.target.checked;
              setLoginState({ ...loginState, checkMeOut: value });
            }}
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          // onClick={() => {
          //                   NavigateUser();
          //                 }}
         // disabled={!loginState.email || !loginState.password}
          >
          Submit
        </button>
      </form>
    

    </div>
    </div>

    );
 };

 export default LoginPage;