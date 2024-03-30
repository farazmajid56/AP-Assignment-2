import './Card.css';

function Card(props){
    return (
        <div id="card">
            <div>{props.isSold ? <p className='sold'>Sold</p> : <p></p>}</div>
            <img className="shoeImage" src={props.path} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;