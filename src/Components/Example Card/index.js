import React from 'react'; 

function ExampleCard(props){

    return(
    <>
    <div className="cardspace">
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src={props.image} alt="img"/>

        </div>
        <div className="flip-card-back">
            <h1> {props.project} </h1>
            <p> {props.details}</p>
            <p> <a href={props.deploy}> Deployed {props.project}</a></p>
            <p> <a href={props.repo}> Repo for {props.project}</a></p>
            <p> Built With {props.tech}</p>
        </div>
    </div>

</div>
</div>
</>
    )
}

export default ExampleCard;