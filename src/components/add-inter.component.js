import React, {Component} from "react";
import interDataService from "../services/interservices";

export default class AddInter extends Component{
	constructor(props){
		super(props);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.saveInter = this.saveInter.bind(this);
		this.newInter = this.newInter.bind(this);
 this.state = {
 	id:null,
 	title:"",
 	description:"",
 	published: false,

 	submitted: false
 };
}

onChangeTitle(e){
	this.setState({
		title: e.target.value
	});
}

onChangeDescription(e){
	this.setState({
		description: e.target.value
	});
}

saveInter(){
	var data = {
		title:this.state.title,
		description: this.state.description
	};

interDataService.create(data)
.then(response => {
	this.setState({
		id: response.data.id,
		title: response.data.title,
		description: response.data.description,
		published: response.data.published,

		submitted: true
	});
	console.log(response.data);
})	
.catch(e => {
	console.log(e);
});
}

newInter(){
	this.setState({
		id:null,
		title:"",
		description:"",
		published: false,

		submitted:false
	});
}

render(){
return(
<div className="submit-form">
{this.state.submitted ? (
	<div>
	<h4 style={{color:'white', fontSize:15}}> Submitted Item Successfully !! 😊 </h4>
	<button  className="btn btn-success" onClick= {this.newInter}>
	Add Item
	</button>

	</div>
	) : (
	<div>
	<div style={{color:'white',fontSize:18,  marginTop:60}} className="form-group">
	<label htmlFor= "title"> Title: </label>
	<input
	style={{borderRadius:12, width:600 }}
	type = "text"
	className="form-control"
	id= "title"
	required
	value={this.state.title}
	onChange= {this.onChangeTitle}
	name = "title"
	/>
	</div>



<div style={{color:'white',fontSize:18,  marginTop:60}} className="form-group">
<label htmlFor= "description"> Description: </label>

<input
style={{borderRadius:12 , width:600}}
type="text"
className= "form-control"
id = "description"
required
value= {this.state.description}
onChange= {this.onChangeDescription}
name= "description"
/>
</div>

<button style={{marginTop:15, borderRadius:12}}  onClick = {this.saveInter} className="btn btn-success">

Submit
</button>
</div>

)
}
</div>
);
}}