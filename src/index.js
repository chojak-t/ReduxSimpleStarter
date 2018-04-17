import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIk0BBvCL1MudhwZu4PRwjsRF2pUUGzmo';

/*
const App = function() {
  return <div>React component</div>
}
*/

//arrow function
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//<App></App> === <App />

ReactDOM.render(<App />, document.querySelector('.container'));
