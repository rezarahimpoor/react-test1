// import { Component, StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './app'

// // class Timer extends Component{
// //     constructor() {
// //     super();
// //     this.state = {
// //     time : new Date().toLocaleTimeString()
// //     }
// //   }
// //   render(){
// //     setInterval(() => {
// //       this.setState({
// //        time : new Date().toLocaleTimeString()
// //       })
// //     }, 1000)
// //     return(
// //       <h2 className='timer'>
// //         {/* it is {new Date().toLocaleTimeString()} */ this.state.time}
        
// //       </h2>
// //     )
// //   }
// // }
// // class Hello extends Component{
// //   render(){
// //     return(
// //       <h1 >سلام دوستان من</h1>
// //     )
// //   }
// // }
// // class App extends Component {
// //   render(){
// //     return (
// //       <div className='main'>
// //         <Hello/>        
// //         <Timer/>
// //       </div>
// //     ) 
// //   }
// // }
// const root = createRoot(document.getElementById('root'));
// // const tick = ()=> {
// root.render(<App/>);
// // }
// // setInterval(tick, 1000);
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'; // دقت کن که این باید default export داشته باشه

const root = createRoot(document.getElementById('root'));
root.render(<App />);
