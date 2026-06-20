
import './App.css'
import Home from './components/home'
import {  Routes, Route } from "react-router-dom"


function App() {
  

  return (
    <>
      {/* <h1>HELLO REACTJS</h1> */}

      {/* <Home />      */}

    {/* <BrowserRouter> */}
      
        <Routes>

          <Route path="" element={<Home/>} />

      </Routes>
      
    {/* </BrowserRouter> */}
    



  
    </>
  )
}


export default App;
