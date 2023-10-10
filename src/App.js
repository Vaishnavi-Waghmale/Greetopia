// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js

import React, { useState } from 'react';
import './App.css'; // Import your CSS for styling
import CardGenerator from './CardGenerator';

function App() {
  return (
    <div className="App">
      <h1>Greeting Card Generator</h1>
      <CardGenerator />
    </div>
  );
}

export default App;


