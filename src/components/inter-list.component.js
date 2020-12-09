import React, {Component} from "react" ;

import interDataService from "../services/interservices";
import { Link } from "react-router-dom";

export default class InterList extends Component {

	constructor(props){
		super(props);
		this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
		this.retrieveInter = this.retrieveInter.bind(this);
		this.refreshList = this.refreshList.bind(this);
		this.setActiveInter = this.setActiveInter.bind(this);
		this.removeAllInter = this.removeAllInter.bind(this);
		this.searchTitle = this.searchTitle.bind(this);

		this.state = {
			mine: [],
			currentInter: null,
			currentIndex: -1,
			searchTitle: "",
		};
	}

componentDidMount(){
	this.retrieveInter();
}

onChangeSearchTitle(e){
	const searchTitle = e.target.value;

	this.setState({
		searchTitle: searchTitle
	});
}

retrieveInter(){
	interDataService.getAll()
	.then(response => {
		this.setState({
			mine: response.data
		});
		console.log(response.data);

	})
	.catch(e => {
		console.log(e);
	});
}

refreshList(){
	this.retrieveInter();
	this.setState({
		currentInter: null,
		currentIndex: -1
	});
}

setActiveInter(inter, index){
	

	this.setState({
		currentInter: inter,
		currentIndex: index
	});
}

removeAllInter(){
	interDataService.deleteAll()
	.then(response => {
		console.log(response.data);
		this.refreshList();
	})
	.catch(e => {
		console.log(e);
	});
}

searchTitle(){
	interDataService.findByTitle(this.state.searchTitle)
	.then(response => {
		this.setState({
			mine: response.data
		});
		console.log(response.data);
	})
	.catch(e => {
		console.log(e);

	});
}

render(){
	const { searchTitle, mine, currentInter, currentIndex } = this.state;

return(
<div className = "list row">
<div style={{alignContent:'center', justifyContent:'center'}} className = "col-md-8">
<div style={{marginTop:30,justifyContent:'center' ,textAlign: 'center', alignContent:'center'}} className="input-group mb-3">

<input 
style={{ borderRadius:11 ,  justifyContent:'center'}}
type="text"
className= "form-control"
placeholder= "Search by title"
value= {searchTitle}
onChange={this.onChangeSearchTitle}
/>


<div className = "input-group-append">
<button style={{color:'white',fontWeight:'bold',borderColor:'white', borderRadius:11 , marginLeft:10}}
className="btn btn-outline-secondary"
type="button"
onClick={this.searchTitle}
>
Search
</button>

</div>
</div>
</div>

<div className="col-md-6">
<h4 style={{color:'white',marginTop:20, marginBottom:20}}> List </h4>

<ul style={{ alignContent:'center', textAlign:'center'}} className="list-group">

{mine &&
	mine.map((inter,index) =>(

<strong style={{textAlign:'center', width:420, marginBottom:10, alignContent:'center', backgroundColor:'white' ,borderRadius:10 }}
className={
	"list-group-item" +
	(index == currentIndex ? "active" : "")
}

onClick={() => this.setActiveInter(inter, index)}
key={index}
>

{inter.title}

</strong>

))}

</ul>


<button style={{fontSize:15 , borderRadius:12}}
className="m-3 btn btn-sm btn-danger"
onClick={this.removeAllInter}
>

Remove All
</button>
</div>

<div className="col-md-6">
{currentInter ? (
<div style={{marginTop:50, color:'white'}} >

<h4 style={{marginTop:30,backgroundColor:'white',borderRadius:10,justifyContent:'center', alignContent:'center', width:200, color:'darkblue',fontWeight:'bold', textAlign:'center' ,borderColor:'darkblue'}} > Item Selected </h4>

<div style={{marginTop:20, color:'white'}} >
<label>

<strong> Title: </strong>
</label> {" "}
{currentInter.title}
</div>

<div>
<label> 
<strong> Description: </strong>
</label>{" "}
{currentInter.description}
</div>
<div>
<label>
<strong> Status: </strong>
</label> {" "}
{currentInter.published ? "Published" : "Pending"}

</div>

<Link style={{fontSize:15}}
to={"/mine/" + currentInter.id}
className="badge badge-warning"
>

Edit

</Link>
</div>

) : (

<div>

<br />

</div>

	)}

</div>
</div>
);






		//)


}

}