import React, {Component}from 'react'
import './Table.css';
import axios from 'axios'
import EditDetails from '../EditStudentDetails/EditDetails'
class StdTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students:[],
            stdinfo:[]     
        }
    }
    componentDidMount() {
        axios({
            method:"get",
            url:'http://localhost:3003/students'
        }).then((res)=>{
            console.log(res)
            if(res.data){
                this.setState({
                    students:res.data
                })                
            }
        },(err)=>{
            console.log(err)
        })
    }
    
    edit=[]
    editBtn=(id)=>{
        // alert(id);
        axios({
            method:"get",
            url:`http://localhost:3003/students/${id}`
        }).then((res)=>{
            console.log(res)
            this.edit.push(res.data)
           if(res.statusText==="OK"){
               this.setState({
                   stdinfo:this.edit
               })
           }           
        },(err)=>{
            console.log(err)
        })
    }

    
     remove =async (id) =>{
        const detail = await axios.delete(`http://localhost:3003/students/${id}`);
        console.log(detail);
        window.location.href="/"
    }
    
        render(){
            console.log(this.state.stdinfo);
        return (
            <>
            <div className="body">
                <div className="tabel_responsive">
                    <span className="header">
                        <h2>Student List</h2>
                        <button className="btn-open" data-toggle="modal" data-target="#addData"><i class="fas fa-user-plus"></i> Add </button>
                    </span>
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Qualification</th>
                                <th>Created On</th>
                                <th>Action</th>
                            </tr>
                        </thead>
    
                            {
                                this.state.students.map((each,index) => {
                                    // console.log(each);
                                    return (
                                        <tbody>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{each.name}</td>
                                                <td>{each.email}</td>
                                                <td>{each.qualification}</td>
                                                <td>{each.currentDateTime}</td>
                                                <td>
                                                <span className="action_btn">
                                                <button className="btn-edit" data-toggle="modal" data-target="#editData" onClick={()=>{this.editBtn(each.id)}}>Edit  <i class="fas fa-user-edit"></i></button>
                                                <button onClick={()=>{this.remove(each.id)}}>Remove <i class="fas fa-trash"></i></button>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )
                                }) 
                        }
                            {this.state.stdinfo.map((ele) => {
                             console.log(ele);
                           return <EditDetails editdetails={ele}/>
                       })}
                    </table>
                </div>
                </div>
                
                </>
        )
   }
}
export default StdTable