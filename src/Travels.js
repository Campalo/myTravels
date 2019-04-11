import React from "react";
//src/Travels.js

import Travel from "./Travel";

const mytravels = [
    {
        photo : "https://www.carigami.fr/magazine/wp-content/uploads/2014/09/sydney-australie.jpg",
        destination : " Syndey",
        country : "Australia",
        distance : "16 084 km " ,  
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG",
        destination : " Singapore",
        country : "Singapore",
        distance : "9 900 km ",
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG",
        destination : " Singapore",
        country : "Singapore",
        distance : "9 900 km ",
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG",
        destination : " Singapore",
        country : "Singapore",
        distance : "9 900 km ",
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/f/f2/Merlion_and_the_Singapore_Skyline.JPG",
        destination : " Singapore",
        country : "Singapore",
        distance : "9 900 km ",
    }
];

const Travels = () => (
    <div>
        {mytravels.map((travelItem, index) => (
            <Travel key={"dream" + index}
                photo={travelItem.photo}
                destination={travelItem.destination}
                country={travelItem.country}
                distance={travelItem.country}
            />   
        ))}
    </div>
);

export default Travels;