import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'));
const tick = ()=> {
  const elem = (
  <div>
    <h1>سلام دوستان</h1>
    <h2>
      it is {new Date().toLocaleTimeString()}.</h2>
  </div>
)
root.render(elem);
}
setInterval(tick, 1000);
