import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {

const [mode, setMode] = useState('light');//wheater dark mode is enabled or not 
const [alert, setAlert] = useState(null)

const showAlert = (message, type)=> {
  setAlert({
    
      msg:message,
      type:type
   
  })
  setTimeout(() => {
    setAlert(null);
    console.log('shivam')
  },1500)
}

const toggleMode = () => {
  if(mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(22 24 39)';
    showAlert("Dark mode has been enable","success" );
    document.title = "TextEditor-Dark-v"
  }else{
    setMode('light');
    document.body.style.backgroundColor = '#e1dbdb';
    showAlert("Light mode has been enable","success" );
    document.title = "TextEditor-Light-v"


  }
}

  return (
    < >
    
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert text={alert}/>
    {/* note : container class is part of bootstrap of margin 0 auto for our content */}
    <div className="container">
    <TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
    </div>
    
 
    </>
  );
}

export default App;
