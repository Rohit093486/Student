import axios from 'axios';
import React, { Component } from 'react'
import './NewDetails.css';

class NewDetails extends Component {
    constructor() {
        super();       
      this.state = {
        emailErr: "",
        nameErr: ""
        }
  }
  StudentInfo = {}

  vaild = () => {
    if (!this.StudentInfo.email){
      this.setState({
        emailErr: "please enter your Email",
      })
    }
    else if(!this.StudentInfo.email.includes("@")){
      this.setState({
         emailErr:"please enter your vaild Email"
      })
    }
    else if(!this.StudentInfo.name){
      this.setState({
          nameErr:"please enter your name"
      })
    }    
    else {
    return true;
}
  }
  
 
  
    Name = (event) => {
        console.log(event.target.value);
        this.StudentInfo.name = event.target.value
        
     }   
    Email = (event) => {
        console.log(event.target.value);
        this.StudentInfo.email=event.target.value
        
     }
    qualification = (event) => {
        console.log(event.target.value);
        this.StudentInfo.qualification = event.target.value
        
    }
    NewStudent = (event) => {
      event.preventDefault()
      this.StudentInfo.currentDateTime=new Date().toDateString()
      console.log(this.StudentInfo);
      if (this.vaild()) {
        axios({
          method: "post",
          url: "http://localhost:3003/students",
          data: this.StudentInfo
        }).then((res) => {
          console.log(res);
          window.location.href = "/"
        }, (err) => {
          console.log(err);
        
        })
      }
  }
  
    render() {        
        return (           
          <div> 
          <div class="modal fade" id="addData" tabindex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true" style={{background:"rgba(21, 192, 178, 0.089)"}}>
            <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">                   
                  <h5 class="modal-title" id="exampleModalLabel" style={{color:'#00bdd6fb'}}>Add New Student</h5>
                  <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="alert alert-light" role="alert">
                    {this.state.nameErr}
                    </div>
                    <div class="alert alert-light" role="alert">
                    {this.state.emailErr}
                    </div>
                <div class="modal-body" >
                <div className="form" onSubmit={this.reset}>
                                      <div className="input_field">
                        <label>Name<span className="span">*</span> :</label>                        
                              <input type="text" className="input"  onChange={this.Name}/>
                                      </div>
          
                                      <div className="input_field">
                        <label>E-mail <span className="span">*</span> :</label>                        
                              <input type="text" className="input"  onChange={this. Email} />
                                      </div>
          
                                      <div className="input_field">
                              <label>Qualification :</label>                              
                                      <div className ="custom_select">
                                          <select  onChange={this.qualification}>
                                              <option value=" ">Select</option>
                                              <option value="BCA">BCA</option>
                                              <option value="MCA">MCA</option>
                                              <option value="B.Tech">B.Tech</option>
                                              <option value="M.Tech">M.Tech</option>
                                          </select>
                                          </div>
                                      </div>
                                      <div className="input_field input_button">
                                          <button className="btn"  onClick={this.NewStudent}>Sumbit</button>
                                          <button className="btn" type="reset">Reset</button>
                                      </div>
                               </div>
                </div>      
              </div>
            </div>
          </div>
                  </div>

               
        )
    }
}
export default NewDetails;