//Travels is a component that loop over the list of travelItems

import React from "react";
import Travel from "./Travel";
import myTravels from "./travel-db"; 

const Travels = () => (
    <div>
        {/* Using keys with index */}
        {/*myTravels.map((travelItem, index) => (
            <Travel key={index}
                photo={travelItem.photo}
                destination={travelItem.destination}
                country={travelItem.country}
                distance={travelItem.country}
            />   
        ))*/}
         {/* Using keys with id */}
        {myTravels.map((travelItem) => (
            // <Travel key="travelItem.id" {...travelItem} />
            <Travel key={travelItem.id} 
                image={travelItem.photo}
                destination={travelItem.destination}
                country={travelItem.country}
                distance={travelItem.distance}
            />   
        ))}
    </div>
);

export default Travels;





// Those 3 functions are the same: 

// [10, 11, 12, 13].map(function(item, index) {
//     return item + 1;
// })  // [ 11, 12, 13, 14 ]

// [10, 11, 12, 13].map((item, index) => item + 1)

// [10, 11, 12, 13].map(item => item + 1)
