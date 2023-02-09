import React, { useState, useEffect } from 'react';
import nlp from 'compromise'; 

function Compromise() {
  const [input, setInput] = useState('This step helps to determine the quality of the requirements. It involves identifying whether the requirements are unclear, incomplete, ambiguous, and contradictory.');
  const [entities, setEntities] = useState([]);

  const getData = () => {
    const doc = nlp(input);
    const people = doc.people().out('array');
    const organizations = doc.organizations().out('array');
    const locations = doc.places().out('array'); 
    const money = doc.money().out('array');
    const numbers = doc.numbers().out('array'); 
    setEntities([...people, ...organizations, ...locations,   ...money, ...numbers, ]);
    console.log(doc.world);
    console.log(doc.sentiment);
  }

  return (
    <div className="Compromise">
       <button onClick={getData}> BTN </button>
      <br />
      <br />
      <p>Entities:</p>
      <ul>
        {entities.map((entity, index) => (
          <li key={index}>{entity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Compromise;