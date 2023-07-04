//Will become a list template that holds an image, name, facts,
//and a button for each json object in oceans.json.


import './styles.css';
import Button from './Button.js';
import React from 'react';
import oceans from './oceans.json';


function Profile() {
const listItem = oceans.map(ocean => (
//We will use map to help us iterate through the image values in the JSON file.
//Declare a variable called listItem and instantiate it equal to oceans.map().
//Set the callback parameter of listItem to ocean =>
//The map function should return ocean which will include all elements required to create a profile object.
   <div key={ocean.id}>
//   Each profile will be contained in its own <div>.
//To keep each <div> unique, we will need to add a key which is set to the id property of each JSON object.
//We are working with JSON objects, so you will need curly braces.
      <img src={ocean.image} alt={ocean.name} className="img"/>
//Using an image tag, set the src attribute equal to the image’s url. This is stored in the JSON file.
//The alt attribute should be set to the name property.
//The starter code contains some CSS styling for the image called img.
//Apply the styling to the image by using the className attribute.
  <h2>{ocean.name}</h2>
  <ul>
  <li>{ocean.fact1}</li>
  <li>{ocean.fact2}</li>
  <li>{ocean.fact3}</li>
  </ul>
   </div>
));
   return(
      <div>
         <ul>{listItem}</ul>
         <Button />
//The Profile function needs to return an list of listItems and the <Button />.
      </div>
   );
}

export default Profile;