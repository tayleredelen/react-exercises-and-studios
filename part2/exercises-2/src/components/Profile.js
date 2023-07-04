//Will become a list template that holds an image, name, facts,
//and a button for each json object in oceans.json.


import './styles.css';
import Button from './Button.js';
import React from 'react';
import oceans from './oceans.json';


function Profile() {
const listItem = oceans.map(ocean => (
<div key={ocean.id}  className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
      <img src={ocean.image} alt={ocean.name} className="img"/>
      <h1>{ocean.name}</h1>
       <h3>Fun Facts:</h3>
         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>
            <Button />
   </div>
));

   return(
         <ul>
            {listItem}
         </ul>
   );
}


export default Profile;
