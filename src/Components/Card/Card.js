import './Card.css';

function Card(props){
    return (
        <div id="card">
            <img src={props.path} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            {props.isSold ? <p className='sold'>Sold</p> : <p className="inStock">In Stock</p>}
        </div>
    )
}

export default Card;