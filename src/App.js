import React from 'react';
import Header from './Header';
import Main from './Main';
import ModalOrderProject from './ModalOrderProject';
import ModalCallPhone from './ModalCallPhone';
import i18next from 'i18next';
import { withNamespaces } from 'react-i18next';
function App ({t}) {

  function handleClick(language) {
    i18next.changeLanguage(language)
  }
  return (
        <div>
          <div className="App">
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('ko')} >
            Korean
          </button>
          <button onClick={()=>handleClick('chi')} >
            Chinese
         </button>
         <button onClick={()=>handleClick('ru')} >
            Русский
         </button>
         </div>
     <Header/>
     <Main/>
     <ModalOrderProject/>
     <ModalCallPhone/>
    </div>
  );
};
export default withNamespaces()(App);

