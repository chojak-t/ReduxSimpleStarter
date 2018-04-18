import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBIk0BBvCL1MudhwZu4PRwjsRF2pUUGzmo';

YTSearch({key: API_KEY, term: 'aldona orłowska'}, function(data){
  console.log(data)
});

/*
const App = function() {
  return <div>React component</div>
}
*/

//arrow functiongg
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//<App></App> === <App />

ReactDOM.render(<App />, document.querySelector('.container'));
