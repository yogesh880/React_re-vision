import { useState } from 'react'
import reactLogo from './assets/react.svg'
import profile from './assets/file.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
     <Card Name='Yogesh kumar'post='SDE-1' profile={profile}/>
    </>
  )
}

export default App
