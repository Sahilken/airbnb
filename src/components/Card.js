import React from "react"
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0)
        badgeText = "SOLD OUT";
    else if (props.location === "Online")
        badgeText = "ONLINE"

    return (
        <div className="Card">
            {badgeText && <div className="Card--Badge">{badgeText}</div>}
            {/* <div className="Card--Badge">{badgeText}</div> */}
            <img src={`./images/${props.coverImg}`} alt="broken" className="Card--Image" />
            <div className="Card--stats">
                <img className="Card--Star" src="./images/Star 1.png" alt="broken" />
                <span>{props.rating}</span>
                <span className="Gray">{props.reviewCount} • </span>
                <span className="Gray">{props.location}</span>
            </div>
            <p className="Card--Title">{props.title}</p>
            <p className="Card--Price"><span className="Bold">From ${props.price}</span> / person</p>


        </div>
    )
}