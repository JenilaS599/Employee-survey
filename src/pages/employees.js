import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";
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
            {EmployeeData? (EmployeeData.map((EmployeeData) =>{
                return(
          <div>
              <h1 class="table-head">List of Employees</h1>
      <table>
        <tr>
            <th>Employee Name</th>
            <th>Employee Id</th>
            <th>Role</th>
            <th>Company Name</th>
        </tr>
        <tr>
            <td>{EmployeeData.name}</td>
            <td>{EmployeeData.empid}</td>
            <td>{EmployeeData.role}</td>
            <td>{EmployeeData.company}</td>
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
