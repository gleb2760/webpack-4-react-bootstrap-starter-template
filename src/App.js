import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import ModalOrderProject from './ModalOrderProject';
import ModalCallPhone from './ModalCallPhone';



const App = () => {
  return (
    <div >
     <Header/>
     <Main/>
     <ModalOrderProject/>
     <ModalCallPhone/>
    </div>
  );
};



export default App;

ReactDOM.render(<App />, document.getElementById('app'));
