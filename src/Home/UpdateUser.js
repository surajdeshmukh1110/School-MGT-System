import { useEffect, useState } from "react";
import { Link, useNavigate, useParams ,useLocation} from "react-router-dom";
import {studData} from '../Home/HomePage';

const UpdateUser=(props)=>{
    
    
    const {state}=useLocation();
    const { stdid } = useParams();
     
    const location = useLocation();

    console.log("State Update ID "+location.state.updateId);

    const newUpdateId=location.state.updateId;
    //{state.myNewId}
    //const myId=(this.props.state.myNewId)
    //const [empdata, empdatachange] = useState({});
    
    

    useEffect(() => {
        
        fetch("http://localhost:8000/student/" +newUpdateId).then((res) => {
            return res.json();
        }).then((resp) => {
            setId(resp.id);
            setName(resp.name);
            setEmail(resp.email);
            setPhoneNumber(resp.phoneNumber);
            setAddress(resp.address);
            setStandard(resp.standard);
            
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");
    const[address,setAddress]=useState("");
    const[standard,setStandard]=useState("");


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const stddata={id,name,email,phoneNumber,address,standard};
      

      fetch("http://localhost:8000/student/"+newUpdateId,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(stddata)
      }).then((res)=>{
        alert('Saved successfully.')
        console.log(res);
        navigate('/HomePage');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>
             
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Update Student</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                {/* <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div> */}

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name}  onChange={e=>setName(e.target.value)} className="form-control"></input>
                                        </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input value={address} onChange={e=>setAddress(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Standard</label>
                                        <input value={standard} onChange={e=>setStandard(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/HomePage" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );


}
export default UpdateUser;