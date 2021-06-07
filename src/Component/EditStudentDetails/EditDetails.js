import '../AddNewDetails/NewDetails.css';
import React, {Component}from 'react'
import axios from 'axios';

class EditDetails extends Component {
  constructor(props) {
      super(props)
      this.state = {
        editstd: []     
      }
  }
  editinfo=[]
 edit=this.props.editdetails
  componentDidMount(){
    // console.log(this.props.editdetails);
    // this.editinfo.push(this.props.editdetails)
    // this.setState({
    //   editstd:this.editinfo,
    // })     
    // console.log(this.state.editstd);
    console.log(this.edit);
  }
  // componentDidMount() {
  //   axios({
  //     method:"get",
  //     url:`http://localhost:3003/students/${this.props.editdetails}`
  // }).then((res)=>{
  //     console.log(res)  
  // },(err)=>{
  //     console.log(err)
  // })
  // }
  
               Name = (event) => {
                console.log(event.target.value);
               this.edit.name = event.target.value
              }   
              Email = (event) => {
                console.log(event.target.value);
                this.edit.email = event.target.value
              }
              qualification = (event) => {
                console.log(event.target.value);
                this.edit.qualification = event.target.value
              }
  render() {
    return (
      <div>
        <div class="modal fade" id="editData" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ background: "rgba(21, 192, 178, 0.089)" }}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" style={{ color: '#00bdd6fb' }}>Edit Student Detail</h5>
                <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="form">
                  <div className="input_field">
                    <label>Name<span className="span">*</span> :</label>
                    <input type="text" className="input" onChange={this.Name} />
                  </div>

                  <div className="input_field">
                    <label>E-mail <span className="span">*</span> :</label>
                    <input type="text" className="input"  onChange={this.Email} />
                  </div>

                  <div className="input_field">
                    <label>qualification :</label>
                    <input type="text" className="input" onChange={this.qualification} />
                  </div>
                  <div className="input_field input_button">
                    <button className="btn" >Save</button>
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
export default EditDetails;