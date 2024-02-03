import { useEffect, useState } from 'react';
import './App.css';
// import Text from './components/text';
import axios from 'axios'
import Index from './companet';
const BASE_URL = "https://jsonplaceholder.typicode.com/users"

function App() {
    const [info,setInfo] = useState("")
    const fetchData = async ()=>{
      try {
        const response = await axios.get(BASE_URL);
        setInfo(response.data)  
      }
      catch(error){
        console.log(error)
    }

  }
useEffect(() =>{fetchData()},[])

  return (
    <div className="App">
      <Index data={info}/>
    </div>
  );
}


export default App;
