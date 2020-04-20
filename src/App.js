import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Modal from './ModalOrderProject';



const App = () => {
  return (
    <div >
     <Header/>
     <Main/>
     <Modal/>
    </div>
  );
};



export default App;

ReactDOM.render(<App />, document.getElementById('app'));
