import './Card.css';

function Card(props){
    return (
        <div>
            <image src={props.path}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Card;