// Travel is a resuable component that displays the content of one travel

import React from "react";

const Travel = ({destination, country, image, distance}) => (
    <figure>
        <img src={image}  alt={destination} />
        <figcaption>
            <h2>{country}, {destination}</h2>
            <p>{distance} from Berlin</p>
        </figcaption>
    </figure>
);

export default Travel;