import './Table.css';
import React, {useState,useEffect }from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';




export default function Table() {
    const [students, setstudents] = useState([]);    
    useEffect(() => {
        loadstudents();        
    }, [])

  
    
    const loadstudents = async () => {        
        const studentinfo = await axios.get('http://localhost:3003/students');        
        setstudents(studentinfo.data.reverse());        
    }  
    
    const removeStd = async id => { 
        if(window.confirm('Are You Sure ?')){
        await axios.delete(`http://localhost:3003/students/${id}`);        
        loadstudents();
        toast.error("Remove has been completed successfully", { position: "top-center" });
        } 
            }
       
    return(
        <>
        
            <div className="body">
                <div className="tabel_responsive">
                    <span className="header">
                        <h2>Student List</h2>
                        <Link to="/AddForm"><button className="btn-open"><i class="fas fa-user-plus"></i> Add </button></Link>
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

                        {students.map((each, index) => {
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
                                                <Link to={`/EditForm/${each.id}`}><button className="btn-edit" >Edit  <i class="fas fa-user-edit"></i></button></Link>
                                                <button onClick={() => removeStd(each.id)}>Remove <i class="fas fa-trash"></i></button>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }
                       
                    </table>
                </div>
            </div>
            
            </>
    )
}
