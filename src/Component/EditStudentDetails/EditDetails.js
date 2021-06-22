import '../AddNewDetails/NewDetails.css';
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useHistory ,useParams} from 'react-router-dom';


const EditDetails = () => {
    let history = useHistory();
    const { id } = useParams();   
  const [NewStd, setNewStd] = useState({
    name: "",
    email: "",
    qualification: "",
    currentDateTime: new Date().toDateString()

  });
  const { name, email, qualification} = NewStd;

  const onInputChange = e => {
    console.log(e.target.value);
    setNewStd({...NewStd,[e.target.name]:e.target.value})
  }

    useEffect(() => {
        loadStd();
    }, []);
  const onSubmit=async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/students/${id}`, NewStd);
    history.push("/");
    }
    
    const loadStd=async () => {        
       const result= await axios.get(`http://localhost:3003/students/${id}`);
        console.log(result);
        setNewStd(result.data)
        }

  return (
    <div className="Body">
    <div className="container">
      <div className="title">
        Edit Data
      </div>
      <form className="form" onSubmit={e=>onSubmit(e)}>
             <div className="input_field">
                <label>Name<span className="span">*</span> :</label>                        
                <input type="text" className="input" name="name" value={name} onChange={e=>onInputChange(e)}/>
             </div>
          
              <div className="input_field">
                <label>E-mail <span className="span">*</span> :</label>                        
                <input type="text" className="input" name="email" value={email}    onChange={e=>onInputChange(e)}/>
              </div>
          
              <div className="input_field">
                <label>Qualification :</label>                              
                <div className ="custom_select">
                  <select onChange={e=>onInputChange(e)} name="qualification" value={qualification}>
                    <option value=" ">Select</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                  </select>
                </div>
              </div>
              <div className="input_field input_button">
                <button className="butn">Update Data</button>                
              </div>
          </form>
      </div>
    </div>
  )
}
export default EditDetails;