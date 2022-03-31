import './App.css';
import Header from './components/Header';
import Textform from './components/Textform';
import Aalert from './components/Aalert';
import { useState } from 'react';


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      
      setAlert(null);
    }, 2000);
  }
  return (
    <>
     <Header title= "TextUtils" one="Home" two="About"/>
     <Aalert alert={alert} />
     <Textform title="TEXTUTILS" showAlert={showAlert}/>
     </>
  );
}

export default App;
