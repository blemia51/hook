import React, { useState } from 'react';

function Counter(props) {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count

  const [count, setCount] = useState(null);


 
  

  return (
    <div>
      
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <input type='number' onChange={(e) => setCount(e.target.value*1)}></input>
    </div>
  );
}

        
export default Counter;