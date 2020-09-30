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
this.props.onChange({[e.target.name]:e.target.value})
this.setState({[e.target.name]: e.target.value})
}
onSubmit = e =>{
e.preventDefault();
//this.props.onSubmit(this.state)
this.setState({
  firstName:"",
  lastName:"",
  userName:"",
  email:"",
  password:"",
});
this.props.onChange({
  firstName:"",
  lastName:"",
  userName:"",
  email:"",
  password:"",
});

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
<button onClick = {e=>this.onSubmit(e)}>Submit</button>
   </form>
)
}

}

export default Form;