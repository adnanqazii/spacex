import React, { useState } from 'react';
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'
import './App.css';
import LaunchType from './types/Launch'

function App() {

  const [id,setId]=useState<string>("");
  const [launches,setLaunches]=useState<LaunchType[]>([])

  const homeHandler=()=>{

    setId("");
  }
  const detailHandler=(idd:string,event:any)=>{
       setId(idd);
     
  }

  return (
    <div className="App">
    <div><h3 className="app-heading" onClick={()=>homeHandler()}>Home</h3></div>
    {id===""?<Launch detailHandler={detailHandler} setLaunch={setLaunches} />:<LaunchDetails id={id.toString()} />}
    
    </div>
  );
}

export default App;
