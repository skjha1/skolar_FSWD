import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css'
import Counter from "./Counter";


// Using ReactDom to render the counter component into the DOM element with the id root 

ReactDOM.render(
<React.StrictMode>
  {/*Rendering the counter component */}
  <Counter />
</React.StrictMode>,
document.getElementById('root')
);
