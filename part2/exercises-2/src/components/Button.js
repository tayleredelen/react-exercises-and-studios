//Creates a button for the application that uses the alert Window method.

import './styles.css';
import React from 'react';

//Inside the Button function, create a new function called onLearnMore.
//This function will hold the alert method.
//Your method should display a message like “Slipsh Splash” or something related to the ocean or water.

//Update the return statement of the Button function. It should activate the onLearnMore alert when clicked.



function Button() {

function onLearnMore() {
alert("SPLASH!");
}

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}


export default Button;