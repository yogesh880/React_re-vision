import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

const reactElement= {
    type:'a',
 props:{
    href:'https://google.com',
    target :'_blank'
 },
 children:'click me to visit google'
}
function MyApp(){
  return(
    <div>
      <h1>Custom React App</h1>
    </div>
  )
}
const Anotherelement=(<a href='https://google.com' target='_blank'>click to visit google</a>)

const areactelement =React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit google'
)

createRoot(document.getElementById('root'))
.render(
//  areactelement
  // reactElement  # not work bcz it is not written in react.
  //  Anotherelement
    // <MyApp/>
     <App />
  
)
