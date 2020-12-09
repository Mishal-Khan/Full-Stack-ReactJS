import logo from './logo.svg';
import './App.css';
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Field, reduxForm } from "redux-form";
//mport "https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
//import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
//import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AddInter from "./components/add-inter.component";
import Inter from "./components/inter.component";
import InterList from "./components/inter-list.component";


class App extends React.Component{

render(){
  return(
<Router>
<div className="checkback">


<div >
 <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/mine">
            <i class='fa fa-home' style={{fontSize:33, marginTop:10, color:'white'}}></i>
         
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons" style={{marginTop:13, flexDirection:'row'}}>
              <button style={{marginLeft:18, color:'red', borderRadius:12}}>
                <Link to={"/mine"} class="button is-primary" href="#">
                  <strong style={{color:'darkblue', fontSize:17 }}>View-Item </strong>
                </Link>
                </button>
                <strong><text>  </text></strong>
                <button style={{marginLeft:10, color:'red', borderRadius:12}}>
                <Link to={"/add"} class="button is-primary" href="#">
                  <strong style={{color:'darkblue', fontSize:17 }}>   Add-Item</strong>
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

<div className="container mt-3">
<Switch>
<Route exact path = {["/", "/mine"]} component= {InterList} />
<Route exact path = "/add" component={AddInter} />
<Route path = "/mine/:id" component={Inter} />

</Switch>
</div>
</div>
</div>

</Router>
    );
}

}
/*
state= {showForm: false}

showForm = () => {
   return (
     <div style={{justifyContent:'center'}}> 
    <form className="App-header">

       <label name="email" type="email" component="input" label="Email" />
      <input name="username" component="input" label="Username" />
    
 <div>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" component="input" type="email" />
      </div>

      <button type="submit">Submit</button>
      </form>
      </div>
     );
}

render(){
    return (
//function App() {
  //return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
<button  onClick={() => this.setState({showForm: true}) }>Add New Application</button>
        <button>Change Existing Application</button>
        <button>Remove Application</button>
        {this.state.showForm ? this.showForm() : null}
  
    </div>


  //);}

////////////////////////////////////////////////


   );
}

}

// const Form = props => {
//   const { handleSubmit } = props;
//   const onSubmit = values => console.log(values);

  
//const FormRedux = reduxForm();




// ContactForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(ContactForm)

/////////////////////////////////////////////////////

*/

export default App;
