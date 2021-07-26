import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import {Link} from "react-router-dom";
import Navbar from './navbar';

class Signup extends Component{

    constructor(props){
     super(props);
    
     this.state = {  
         empid: "",
         name:"",
         company:"",
         role:"",
         mail: "",
         password:""
      }
    }
    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
       }
    handlesubmit = (event) => {
        event.preventDefault();
        const employee ={
            empid: this.state.empid,
         name:this.state.name,
         company:this.state.company,
         role:this.state.role,
         password: this.state.password,
         email: this.state.mail,
        };
        console.log(employee);

        axios.post('http://localhost:5000/employees/add/',employee)
        .then(res => console.log(res.data));

        alert("Thank you for Registering.");

        this.setState({  
          empid: "",
          name:"",
          company:"",
          role:"",
          mail: "",
          password:""
       })

       }

       render(){
        return(
         <div className="valid-form" >
           <Navbar/>
           <h1> Employee Registration Form</h1>
          <form onSubmit = {this.handlesubmit} className="form" autoComplete="off">
            <ul>
           <label> Emp Id : </label>
           <input  type="number" 
             name="empid" 
             placeholder="Enter Employee Id"
             required 
             value={this.state.empid}  
             onChange={this.handlechangeall} /> 
             <br/>
       
           <label> Name : </label>
           <input  type="text" 
            name="name"  
            pattern="[A-Za-z]+" 
            placeholder="Enter Name"
            required 
            value={this.state.name}  
            onChange={this.handlechangeall} /> 
            <br/>

            <label> Company : </label>
           <input  type="text" 
            name="company"  
            placeholder="Enter Company name"
            required 
            value={this.state.company}  
            onChange={this.handlechangeall} /> 
            <br/>

            <label> Role : </label>
           <input  type="text" 
            name="role"  
            placeholder="Enter Position Title"
            required 
            value={this.state.role}  
            onChange={this.handlechangeall} /> 
            <br/>
       
           <label> Mail Id : </label>
           <input  type="email" 
            name="mail" 
            placeholder="Enter Mail Id"
            required
            value= {this.state.mail}
            onChange={this.handlechangeall} /> <br/>

            <label>Password : </label>
            <input type="password"  
            name="password"
            required
            placeholder="Enter Password" 
            onChange={this.handlechangeall}/>
          </ul>
           <button type="submit" value="Register" id="button">Register</button>
       <br/><br/>
          </form>
         </div>
        )
       }
      }
       
    export default Signup;
