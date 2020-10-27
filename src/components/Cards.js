import React from 'react';
import './Cards.css'
import CardItem from './CardItem';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem 
                        src="images/walkway.png" 
                        text="The peaceful ocean is waiting for you" label="Travel" 
                        path="/services" />
                        <CardItem 
                        src="images/beachview.png" 
                        text="White sands to the horizon" label="Luxory" 
                        path="/services" />
                        
                    </ul>
                    <ul className="cards-items">
                        <CardItem 
                        src="images/shells.png" 
                        text="Collect shells on the beach" label="Travel" 
                        path="/services" />
                        <CardItem 
                        src="images/sunset.png" 
                        text="Sunsets to Rememer" label="Luxory" 
                        path="/services" />
                        <CardItem 
                        src="images/seacliffs.png" 
                        text="Coastal Beauty" label="Scenic" 
                        path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
