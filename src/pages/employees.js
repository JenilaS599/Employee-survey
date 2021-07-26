import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";

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
                        <h3>{EmployeeData.name}
                        {EmployeeData.empid}
                        {EmployeeData.role}
                        {EmployeeData.company}
                        </h3>
                        </div>
                );
            })):(
                <span></span>
            )}
        </div>
    )
}
