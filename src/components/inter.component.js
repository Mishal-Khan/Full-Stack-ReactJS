import React, { Component } from "react";
import interDataService from "../services/interservices";

export default class Inter extends Component{

	constructor(props){
		super(props);
		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.getInter = this.getInter.bind(this);
		this.updatePublished= this.updatePublished.bind(this);
		this.updateInter = this.updateInter.bind(this);
		this.deleteInter = this.deleteInter.bind(this);

		this.state = {
			currentInter: {
				id: null,
				title:"",
				description:"",
				published: false
			},
			message:""
		}; 
	}

componentDidMount(){
	this.getInter(this.props.match.params.id);
}

onChangeTitle(e){
	const title = e.target.value;

	this.setState(function(prevState){
		return{
			currentInter:{
				...prevState.currentInter,
				title: title
			}
		};
	});
}

onChangeDescription(e){
	const description = e.target.value;

	this.setState(prevState => ({

			currentInter:{
				...prevState.currentInter,
				description: description
			}
		
	}));
}

getInter(id){
	interDataService.get(id)
	.then(response => {
		this.setState({
			currentInter: response.data
		});
		console.log(response.data);
	})
	.catch(e => {
		console.log(e);
	});
}

updatePublished(status){
	var data = {
		id: this.state.currentInter.id,
		title: this.state.currentInter.title,
		description: this.state.currentInter.description,
		published: status
	};

interDataService.update(this.state.currentInter.id,data)
.then(response => {
	this.setState(prevState => ({
		currentInter: {
			...prevState.currentInter,
			published: status
		}
	}));
	console.log(response.data);
})
.catch(e => {
	console.log(e);
});

}

updateInter(status){
	var data0 ={
	    id: this.state.currentInter.id,
		title: this.state.currentInter.title,
		description: this.state.currentInter.description,
	    update: status
	};
interDataService.update(this.state.currentInter.id,data0)
.then(response => {
	this.setState(prevState => ({
		currentInter: {
			...prevState.currentInter,
		update: status
		}
	}));
	console.log(response.data);
})

		.catch(e => {
		console.log(e);
	});
}

deleteInter(status){
	var data2 ={
	    id: this.state.currentInter.id,
		title: this.state.currentInter.title,
		description: this.state.currentInter.description,
	    delete: status
	};
interDataService.delete(this.state.currentInter.id,data2)
.then(response => {
	this.setState(prevState => ({
		currentInter: {
			...prevState.currentInter,
		delete: status
		}
	}));
	console.log(response.data);
})
	.catch(e => {
		console.log(e);
	});
}


render(){
	const {currentInter } = this.state;

	return(
<div>
{currentInter ? (

<div className="edit-form">
<h4 style={{color:'white', marginTop:40 }}> Update Item </h4>

<form>

<div style={{color:'white', width:600, marginTop:35, fontSize:18}} className="form-group">
<label htmlFor = "title"> Title: </label>

<input 
style={{borderRadius:13}}
type= "text"
className="form-control"
id="title"
value={currentInter.title}
onChange={this.onChangeTitle}
/>

</div>
<div style={{color:'white', width:600, marginTop:25, fontSize:18}} className="form-group">
<label htmlFor = "description"> Description: </label>

<input
style={{borderRadius:13}} 
type= "text"
className="form-control"
id="description"
value={currentInter.description}
onChange={this.onChangeDescription}
/>

</div>

<div style={{marginTop:40 , color:'white', fontSize:18}} className="form-group">
<label>
<strong style={{color:'white', fontSize:20, marginRight:12}}> Status: </strong>
</label>
{currentInter.published ? "Published" : "Pending"}
</div>
</form>

{currentInter.published ? (
<button
style={{fontSize:17, borderRadius:12}}

className="badge badge-primary mr-2"
onClick={() => this.updatePublished(false)}
>
UnPublish
</button>
	) : (

<button 
style={{fontSize:17, borderRadius:12}}
className="badge badge-primary mr-2"
onClick={() => this.updatePublished(true)}
>
Publish
</button>

	)}
{currentInter.delete ? (

<button
style={{fontSize:17, borderRadius:12}}

className="badge badge-danger mr-2"
onClick={() => this.deleteInter(false)}
>
Delete Successfully
</button>
   ) : (

<button
style={{fontSize:17, borderRadius:12}}

className="badge badge-danger mr-2"
onClick={() => this.deleteInter(true)}
>
Delete
</button>

   )}

{currentInter.update ? (

<button
style={{fontSize:17, borderRadius:12}}

type="submit"
className="badge badge-success"
onClick={() => this.updateInter(false)}
>
Updated Successfully
</button>

   ) : (

<button
style={{fontSize:17, borderRadius:12}}

className="badge badge-success"
onClick={() => this.updateInter(true)}
>
Update
</button>
)}
<p>{this.state.message}</p>
</div>

	) : (

 <div>
 <br />
 
 </div>
	)}

</div>
		);
}
}