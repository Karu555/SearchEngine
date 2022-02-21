import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";




function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    //mounting
    fetch("https://fast-reef-22226.herokuapp.com/data")
    .then((d) => d.json())
    .then((res)=>{
      console.log("response",res);
      setData(res)//call this it start again recreatong all data
    });
   
    
    //network
  },[]);
  
  return (
    <div className="App">
      {/* <Navigation /> */}
     
     <div>
        <h1 style={{ fontSize:"100px"}}>
          <span style={{color:"#4285F4"}}>G</span>
        <span style={{color:"#DB4437"}}>o</span>
        <span style={{color:"#F4B400"}}>o</span>
        <span style={{color:"#4285F4"}}>g</span>
        <span style={{color:"#0F9D58"}}>l</span>
        <span style={{color:"#DB4437"}}>e</span></h1>
        <input style={{width:"500px"}} placeholder="Search"/>
        <button >Search</button>
     </div>
    </div>
  );
}
export default App;
