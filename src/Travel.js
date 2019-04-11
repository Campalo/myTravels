import React from "react";

const Travel = ({destination, country, photo, distance}) => (
    <figure>
        <img src={photo}  alt={destination} />
        <figcaption>
            <h2>{country}, {destination}</h2>
            <p>{distance} from Berlin</p>
        </figcaption>
    </figure>
);

export default Travel;