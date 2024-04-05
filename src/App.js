import React from "react";
// import ReactDOM from "react-dom";
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import Card from "./components/Card"
import airbnbData from "./airbnbData"

export default function App() {

    const Card_Elements = airbnbData.map((cardd) => {
        return (
            <Card
                key={cardd.id}
                title={cardd.title}
                //description={cardd.description}
                price={cardd.price}
                coverImg={cardd.coverImg}
                rating={cardd.stats.rating}
                reviewCount={cardd.stats.reviewCount}
                location={cardd.location}
                openSpots={cardd.openSpots}

            // cardd={cardd}

            // {...cardd}
            />
        )
    })

    return (
        <div className="MainContainer">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {Card_Elements}
            </section>
        </div>
    )
}