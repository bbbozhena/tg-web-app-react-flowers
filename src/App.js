import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(()=>{
    tg.ready()
  },[])

  const closeApp = () =>{
    tg.close()
  }
  return (
    <div className="App">
    <button onClick={closeApp}>Close</button>
    </div>
  );
}

export default App;
