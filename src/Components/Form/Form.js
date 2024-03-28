import './Form.css'
import {useState} from "react";

function Form(){
	const[value,setValue] = useState(''); 
	const handleClick = () => {
		setValue("Hope so :)")
	}
	
	return (
		<div>
			<h1>Is State Clear Now?</h1>
			<input type="text" name="text-field" placeholder="Type Here"/>
			<button onClick={handleClick}>Click Me</button>
			<p id="hidden">{value}</p>
		</div>
	)
}

export default Form;