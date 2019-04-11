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
        photo : "https://upload.wikimedia.org/wikipedia/commons/8/83/Harbour_Bridge_from_Chelsea.JPG",
        destination : " Auckland",
        country : "New Zeland",
        distance : "17 500 km ",
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/b/b6/GrooteKerk_001.jpg",
        destination : " Pretoria",
        country : "South Africa",
        distance : "8 800 km ",
    },
    {
        photo : "https://upload.wikimedia.org/wikipedia/commons/f/f9/CentrevilleMontreal%C3%A9t%C3%A9.jpg",
        destination : " Montreal",
        country : "Canada",
        distance : "6 000 km ",
    }
];

const Travels = () => (
    <div>
        {/* Using keys with index */}
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