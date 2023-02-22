import React, { useState, useEffect } from "react";
import axios from 'axios'


const EntityRecognition = () => {
  const [text, setText] = useState('This step helps to determine the quality of the requirements. It involves identifying whether the requirements are unclear, incomplete, ambiguous, and contradictory.');

  const [entities, setEntities] = useState([]);

  const getEntities = async (text) => {
    const response = await axios.post('https://api.openai.com/v1/engines/entity-linker/jobs', {
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 2048,
      n: 1,
      stop: ['.', '?', '!'],
      temperature: 0.5,
    }, {
      headers: {
        'Authorization': `Bearer OPENAI_API_KEY_REMOVED`,
        'Content-Type': 'application/json'
      }
    });

    setEntities(response.data.choices[0].text.split(' ').filter(word => word[0] === '(' && word[word.length - 1] === ')'));
  };


  return (
    <div>
      <button onClick={() => getEntities('Enter your text here.')}>Extract Entities</button>

      <div>
        {entities.map(entity => (
          <p key={entity}>{entity}</p>
        ))}
      </div>
    </div>
  );
};

export default EntityRecognition;
