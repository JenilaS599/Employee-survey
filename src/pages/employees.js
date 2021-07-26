import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default function Employees() {
    const [EmployeeData, setEmployeeData] = useState('');

    const getEmployeeData = () =>{
        axios.get('http://localhost:5000/employees/')
        .then((res) => {
            console.log(res.data);
            setEmployeeData(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    useEffect(() =>{
        getEmployeeData();
    }, []);

    return (
        <div>
            <h1 class="table-head">List of Employees</h1>
            <table>
        <tr>
            <th className="col-md-3">Employee Name</th>
            <th className="col-md-3">Employee Id</th>
            <th className="col-md-3">Role</th>
            <th className="col-md-3">Select</th>
        </tr></table>
            {EmployeeData? (EmployeeData.map((EmployeeData) =>{
                return(
          <div>
     <table>
        <tr>
            <td className="col-md-3">{EmployeeData.name}</td>
            <td className="col-md-3">{EmployeeData.empid}</td>
            <td className="col-md-3">{EmployeeData.role}</td>
            <input className="col-md-3" type="checkbox"></input>
        </tr>
    </table>
   </div>
                );
            })):(
                <span></span>
            )}
        </div>
    )
}
