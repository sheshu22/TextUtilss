import './App.css';
import Header from './components/Header';
import Textform from './components/Textform';
import Aalert from './components/Aalert';
function App() {
  return (
    <>
     <Header title= "TextUtils" one="Home" two="About"/>
     <Aalert title="alert" />
     <Textform title="TEXTUTILS"/>
     </>
  );
}

export default App;
