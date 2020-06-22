import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import Auth from './Auth';
import ProductWeekendTask from './ProductWeekendTask';
import "bootstrap/dist/css/bootstrap.css";
const API_URL = `http://localhost:8080/`;
function App() {
  const  [text,setText] = useState("");
  const [data,setData] = useState([]);
  const inputBtnHandler =()=>{
    Axios.get(`${API_URL}/products`)
    .then((res)=>{
      alert("Data masuk");
      console.log(res.data);
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (

    <div className="App">
      {/* <h3>Hello</h3>
      <input type="button" value="Click For Products" onClick={inputBtnHandler}/>
      {
        data.map((val)=>{
          return <h4>
            {val.productName}
          </h4>
        })
      } */}
      {/* <Auth/>/ */}
      <ProductWeekendTask/>
    </div>
  );
}

export default App;
