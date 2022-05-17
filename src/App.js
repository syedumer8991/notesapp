// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from 'react'
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode"

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utils - Light Mode"
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={ mode } toggleMode={toggleMode}/>
      <Routes>
        <Route index exact path="/" element={
                  <>
                  <Alert alert={alert} />
                  <div className='container my-3'>
                    <TextForm showAlert={showAlert} heading="Enter Text to analyze" mode={ mode }/>
                  </div>
                  </>
        } />
        <Route exact path="/about" element={
           <About/> 
          } />
      </Routes>
        {/* <Navbar /> */}


    </>
  );
}

export default App;
