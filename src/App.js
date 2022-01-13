import './App.css';
import {useState} from "react";
import Form from "./Form"
import Item from "./Item";

export default function App() {

  const [data, setData] = useState("")

  return (
    <div className="App">
      <Form setData={setData}/>
      {data && data.map((item) => {
          return <Item key={item.RecordData} data={item}/>
      })}
    </div>
  );
}

