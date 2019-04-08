import React from "react";

const Travels = ({destination, country, photo, distance}) => (
    <figure>
        <img src={photo}  alt={destination} />
        <figcaption>
            <p>{country}, {destination}</p>
            <p>{distance} from Berlin</p>
        </figcaption>
    </figure>
);

export default Travels;