import React from 'react';
import Header from './Header';
import Main from './Main';
import ModalOrderProject from './ModalOrderProject';
import ModalCallPhone from './ModalCallPhone';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App () {
  const { t } = useTranslation();

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
         <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
         </div>
     <Header/>
     <Main/>
     <ModalOrderProject/>
     <ModalCallPhone/>
    </div>
  );
};
export default App;

