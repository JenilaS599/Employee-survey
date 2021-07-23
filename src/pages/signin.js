import React, { Component } from 'react';
import '../index.css';

class Signin extends Component{

    constructor(props){
     super(props);
    
     this.state = {  
         mail: "",
         password:""
      }
    }
    handlechangeall = (event) =>{
        this.setState ( { [event.target.name] :event.target.value  } )
       }
    handlesubmit = (event) => {
        event.preventDefault();
        // alert("Thank you for Registering.");
       }
       handleLogin =() =>{

       }
       render(){
        return(
         <div className="valid-form" >
           <h1>Sign in</h1>
          <form onSubmit = {this.handlesubmit} className="form" autoComplete="off">
            <ul> 
           <label> Mail Id : </label>
           <input  type="email" 
            name="mail" 
            placeholder="Enter Mail Id"
            required
            value= {this.state.mail}
            onChange={this.handlechangeall} /> <br/><br/>

            <label>Password : </label>
            <input type="password"  
            name="password"
            placeholder="Enter Password" 
            onChange={this.handlechangeall}/>
          </ul>
           <button type="submit" value="Register" id="button">Sign in</button>
       <br/><br/>
          </form>
         </div>
        )
       }
      }
       
    export default Signin;