import React,{Component} from 'react'
import {render} from 'react-dom'
import App from './App.jsx'

class Main extends Component{
	render(){
		return <App/>
	}
}


render(<Main/>,document.getElementById("root"))