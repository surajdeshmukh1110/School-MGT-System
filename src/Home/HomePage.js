import SchoolImage1 from '/home/surajd/Documents/React/NewSchool/newSchoolMgt/schoolmgt/src/Images/schoolImage4.jpg';
import "./HomeForm.css";
import SchoolLogoImg from'/home/surajd/Documents/React/NewSchool/newSchoolMgt/schoolmgt/src/Images/schoolLogo.png';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginState from '../Login/LoginPage'
import UpdateUser from './UpdateUser';


const HomePage = () => {
  const [studData, setStudData] = useState(null);
  const navigate = useNavigate();
  
  
  const myLogin=localStorage.getItem("loginUser");
  console.log("My LocalStorage id is "+myLogin);

  const UpdateStudent = (id) => {
    
    navigate("/UpdateStudent/" + id,{state:{updateId:id}} );
    
  };

  const LogOutUser=()=>{


     navigate("/");
     localStorage.removeItem("myLogin");
  }

  const DeleteStudent = (id) => {
    if (window.confirm('Do you want to Delete Student?')) {
        fetch("http://localhost:8000/student/" + id, {
            method: "DELETE"
        }).then((res) => {
            alert(' Student deleted successfully.')
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
    }
}

  useEffect(() => {
    fetch("http://localhost:8000/student")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setStudData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Fragment>

        <div className='main-containt'>
        <nav className="navbar navbar-primary" id='navbarID'>
          <div className='container-fluid'>
          <img id='LoginImageId'
               className='schoolLogo' 
               src={SchoolLogoImg}
              alt='School Logo'></img>
            <h2 id='SchoolNameId2'><p id='SchoolNameId'> Savitribai Vagale Highschool and Junior College </p></h2>
             <p id='userNameId'><h2 id='userNameHello'>Hello : </h2>{myLogin}</p>
            <button type='submit' id='logoutId' className='btn btn-danger btn-lg' onClick={() => { LogOutUser() }}>Logout</button>
          </div>
        </nav>

        </div>
      </Fragment>
      <div>
        <img
          id="SchoolImage1Id"
          className="bootstrap-logo"
          src={SchoolImage1}
          alt="School Logo"
        />
        </div>

      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Student Details</h2>
          </div>
          <div className="card-body">
            <div className="divbtn">
              <Link to="/CreateStudent/" className="btn btn-success">
                Add Student
              </Link>
            </div>
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr >
                  <th scope="col">ID</th>
                  <th scope="col">Name </th>
                  <th scope="col">Email </th>
                  <th scope="col">Mobile Number </th>
                  <th scope="col">Address </th>
                  <th scope="col">Standard </th>
                  <th scope="col">Action </th>
                </tr>
              </thead>
              <tbody>
              {studData &&
                    studData.map(item => (
                          <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNumber}</td>
                          <td>{item.address}</td>
                          <td>{item.standard}</td>
                          <td><a onClick={() => { UpdateStudent(item.id) }} className="btn btn-success">Update</a>
                         <a onClick={() => { DeleteStudent(item.id) }} className="btn btn-danger">Delete</a>
                         
                        </td>
                      </tr>
                                ))
                            }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;