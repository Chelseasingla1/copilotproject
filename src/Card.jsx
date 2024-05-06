import './Card.css'
function Card(props) {
    const imageStyle = {
        border: '2px solid black',
    };
    return (

        <div className="column">
            <div className="image-container">
            <img src={props.image} alt='Staff' style={imageStyle} />
            </div>
        
            <h3 className="art-name"> {props.name}</h3>
            <p>{props.position}</p>
            <p>{props.jobArea}</p>
            <div className="starline">
                {props.rating}
                <div className="extraname">
                    {props.author}
                </div>
            </div>
        </div>


    )

}

export default Card;


