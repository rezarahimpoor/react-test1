import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




class Timer extends Component{
  render(){
    return(
      <h2>
        it is {new Date().toLocaleTimeString()}
      </h2>
    )
  }
}





class Hello extends Component{
  render(){
    return(
      <h1>سلام دوستان من</h1>
    )
  }
}







class App extends Component {
  render(){
    return (
      <div>
        <Hello/>        
        <Timer/>
      </div>
    ) 
  }
}








const root = createRoot(document.getElementById('root'));
const tick = ()=> {
root.render(<App/>);
}
setInterval(tick, 1000);