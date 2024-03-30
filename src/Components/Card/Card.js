import './Card.css';

function Card(props){
    return (
        <div id="card">
            {props.isSold ? <p className='sold'>Sold</p> : <p className="inStock">In Stock</p>}
            <img src={props.path} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;