import React from 'react';
import { Route } from 'react-router-dom';
import Msg from './components/msg';

const App = () => {
	const[crossingState,setcrossingState]=useState();
	return <div className="App">App component
	<Msg/>
  <Comment/>
	<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#"></a>
    <a href="#"></a>
    <a href="#">Link 3</a>
  </div>
</div>
	
	</div>;
};
export default App;
