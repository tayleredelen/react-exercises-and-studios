//Will become a list template that holds an image, name, facts,
//and a button for each json object in oceans.json.


import './styles.css';
import Button from './Button.js';
import React from 'react';
import oceans from './oceans.json';


function Profile() {
const listItem = oceans.map(ocean => (
   <div key={ocean.id}>
      <img src={ocean.image} alt={ocean.name} className="img"/>
   </div>
));

   return(
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>
   );
}


export default Profile;
