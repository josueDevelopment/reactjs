import React,{Component} from 'react';
import styles from './app.css'
class App extends Component{
	render(){
		return(
			<div className={styles.cont}>
				<h1 className={styles.title}>Hello <b>React</b> with css Modules</h1>
			</div>
			)
	}
}

export default App;