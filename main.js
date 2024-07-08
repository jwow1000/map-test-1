import './style.css';
import { map } from './map.js';
import { setupCounter } from './counter.js'



document.querySelector('#app').innerHTML = `
  <div id="landscape1-mainContainer">
      ${map}
  
  </div>
`

setupCounter(document.querySelector('#dude'));
setupCounter(document.querySelector('#mountain'));
