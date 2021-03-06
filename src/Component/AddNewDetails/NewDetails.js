import './NewDetails.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

const NewDetails = () => {
  let history = useHistory();  
  const [NewStd, setNewStd] = useState({
    name: "",
    email: "",
    qualification: "",
    currentDateTime: new Date().toDateString(),        
  });
    
  const { name, email, qualification} = NewStd;

  const [valid, setvalid] = useState(false)
  const [namevalid, setNamevalid]=useState(false)
  const [Emailvalid, setEmailvalid]=useState(false)

  const onInputChange = e => {
    console.log(e.target.value);    
    setNewStd({...NewStd,[e.target.name]:e.target.value})    
  }

  const onSubmit= async e => {
    console.log(NewStd)
    e.preventDefault();
    if(!NewStd.name && !NewStd.email){
    setvalid(true)
     }
    else if(!NewStd.name){
      setNamevalid(true)
    }
    else if (!NewStd.email)
    {
    setEmailvalid(true)
    }     
    else if(NewStd.email && !NewStd.email.includes("@") && !NewStd.email.includes(".")){
    setEmailvalid(true)
    }
    else if (NewStd.name && NewStd.email && NewStd.email.includes("@") && NewStd.email.includes("."))
    {
    await axios.post("http://localhost:3003/students",NewStd);
    toast.success("Added  has been completed successfully", { position: "top-center" });
    history.push("/");
    }    
  }
  
  return (
    <div className="Body">
    <div className="container">
      <div className="title">
        Add New Data
      </div>
      <form className="form" onSubmit={e=>onSubmit(e)}>

      
      
             <div className="input_field">
                <label>Name<span className="span">*</span> :</label>                        
                <input type="text" className="input" name="name" value={name} onChange={e=>onInputChange(e)} />
            </div>
            {valid ?<p>Please Enter Name</p>:""}
            
             

              <div className="input_field">
                <label>E-mail <span className="span">*</span> :</label>                        
                <input type="text" className="input" name="email" value={email} onChange={e=>onInputChange(e)} />
              </div>
              {valid ? <p>Please Enter Email</p>:""}
              {Emailvalid ? <p>Please Enter Valid Email </p>:""}
          
              <div className="input_field">
                <label>Qualification :</label>                              
                <div className ="custom_select">
                  <select   onChange={e=>onInputChange(e)} name="qualification" value={qualification}>
                    <option value=" ">Select</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                  </select>
                </div>
              </div>
              <div className="input_field input_button">
                <button className="btn">Add Data</button>
                <button className="btn" type="reset">Reset</button>
              </div>
          </form>
      </div>
    </div>
  )
}
export default NewDetails;