// Import the React library, which allows us to define components
import React from 'react';

// Import the Players component, which we'll use to show a list of players
import { Players } from './features/players/Players';


// Define the App component
function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <div className='App'>
      <h1 className='header'>Welcome to the Puppy Bowl Event!</h1>
       <section className='intro'>
        <p>Come and join us for a fun-filled day of adorable puppy football!</p>
       
       <p>Get ready to meet the talented pups competing in this year's Puppy Bowl... and here they are:</p>
       </section>
      <Players />
      </div>
  );
}

// Export the App component as the default export
export default App;
