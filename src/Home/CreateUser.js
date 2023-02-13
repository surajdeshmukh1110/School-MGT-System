import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");
    const[email,setEmail]=useState("");
    const[standard,setStandard]=useState("");
    const[address,setAddress]=useState("");
    const[validation,setValidation]=useState(false);

    const navigate=useNavigate();

    const expEmail="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

    const handlesubmit=(e)=>{
      e.preventDefault();
      const studdata={name,email,phoneNumber,standard,address};
      

      fetch("http://localhost:8000/student",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(studdata)
      }).then((res)=>{
        console.log(res);
        alert('Saved successfully.')
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
                                <h2>Add Student</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled"  className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>setValidation(true)} onChange={e=>setName(e.target.value)} className="form-control"></input>
                                            {name.length==0 && validation && <span className="text-danger">Please Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onMouseDown={e=>setValidation(true)} onChange={e=>setEmail(e.target.value)} className="form-control"></input>
                                            {email.match(expEmail) && validation && <span className="text-danger">Email Should have @ Symbol</span>}

                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)} className="form-control"></input>
                                            {phoneNumber.length!=10 && validation && <span className="text-danger">Mobile number should have 10 digits</span>}

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
                                            {standard>=12 && validation && <span className="text-danger">Standard Must be Less than 12 </span>}

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
export default CreateUser;