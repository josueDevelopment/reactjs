import React,{Component} from 'react';
import styles from './app.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


let name=({match})=>{
	return(
		<div>
			<h1>User</h1>
			<Route path={`${match.path}/:name`} component={user}/>	
		</div>
			)
}
let user=({match})=>{
	console.log(match)
	return(<h1>Hello {match.params.name}</h1>)
	
	}

let home=()=><h1>Home</h1>
let App=()=>{
	return(
		
		<Router>
		<div>
			<h1>WELCOME</h1>
			<span>Go it <Link to="/user">name</Link></span>
			<Route exact path="/" component={home}/>
			<Route path="/user" component={name}/>
		</div>
		</Router>
		)
}



export default App;