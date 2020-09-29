import React from "react";

class Form extends React.Component{
state = {
         firstName:"",
         lastName:"",
         userName:"",
         email:"",
         password:"",
}
change = e =>{
this.setState({[e.target.name]: e.target.value})
}
render(){
return(
 <form>
   <label>FirstName:</label>
   <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={e => this.change(e)}/><br/><br/>
   <label>LastName:</label>
   <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={e => this.change(e)}/><br/><br/>
   <label>userName:</label>
   <input type="text" name="userName" placeholder="User Name" value={this.state.userName} onChange={e => this.change(e)}/><br/><br/>
   <label>Email:</label>
   <input type="text" name="email" placeholder="Email" value= {this.state.email} onChange={e => this.change(e)}/><br/><br/>
   <label>Password:</label>
   <input type="text" name="passowrd" placeholder="password" value={this.state.passowrd} onChange={e => this.change(e)}/><br/><br/>
   </form>
)
}

}

export default Form;