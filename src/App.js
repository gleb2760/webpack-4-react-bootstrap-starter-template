import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';



const App = () => {
  return (
    <div >
     <Header/>
     <Main/>
    </div>
  );
};



export default App;

ReactDOM.render(<App />, document.getElementById('app'));
