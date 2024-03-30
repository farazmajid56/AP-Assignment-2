import './Form.css'
import { useState } from "react";

function Form() {
    const [value, setValue] = useState('');
    let temp = ""
    const handleChange = (event) => {
       temp = event.target.value;
    }
    
    const handleClick = () => {
        setValue(temp);
    }
    
    return (
        <div>
            <h1>Is State Clear Now?</h1>
            <input type="text" name="text-field" placeholder="Type Here" onChange={handleChange} />
            <button onClick={handleClick}>Click Me</button>
			{value !== '' &&
            <p id="hidden">{value}</p>}
        </div>
    )
}

export default Form;
//{value !== '' ? <p id="hidden">{value}</p> : <></>}
