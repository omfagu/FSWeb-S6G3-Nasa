import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios"
import APODViewer from "./components/APODViewer";



function App() {
  const [apod, setApod] = useState();
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState(new Date().toISOString().split("T")[0]);
  
  function fetchApod (dateParam){
    setLoad(false);
    axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: "Zbyx0w8WrDattX0p1ghBQZR1gB1ngEhVcaoJnnEp",
        date: dateParam,
        thumbs: true
      }
    })
    .then(function (response) {
      console.log(response.data);
      setApod(response.data);
      setLoad(true);
    })
    .catch(function (error) {
      console.log(error);
    })
  
  }

  useEffect(() => {
    fetchApod(input)
  }, [input])

  function dateChangeHandler(e) {
    console.log('dateChangeHandler >',e.target.value);
    setInput(e.target.value);
  }
  return (
    <div className="App">
       
    {load &&  <APODViewer apod={apod} dateChange={setInput} currentDate={input}/>  }
    {!load && <p>Yükleniyor</p>   }
    </div>
  );
}

export default App;
