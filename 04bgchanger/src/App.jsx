import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-0 px-4 '>
          <div className='flex flex-wrap justify-center absolute bottom-0 gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
            >Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'teal' }}
            onClick={() => setColor('teal')}
            >Teal</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
            >green</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{ backgroundColor: 'orange' }}
            onClick={() => setColor('orange')}
            >orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
