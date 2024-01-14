import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

import {useEffect, useState} from 'react';
//import axios from 'axios';

function App() {

  // const [data,setData] = useState();

  //     const getData = async()=>{
  //       const response = await axios.get("http://localhost:4001/getData");
  //       setData(response.data);
  //     }
    
  // useEffect(() => {
  //   getData();
    
  // }, []);
  

  return (
    <>
      
    <Home/>
        
  
    </>
  );
}

export default App;
