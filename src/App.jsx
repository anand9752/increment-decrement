import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
   const[count , newCount]  = useState(0);
  function decreaseHandler(){
    newCount(count-1);


} 
function increaseHandler(){
  newCount(count+1);


} 
function resetHandler(){
  newCount(0);


} 


  return (
    <div className='w -[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10 '>

      <div className='text-[#0398d4] font-medium text-2xl' >Increment & Decrement</div>

      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-black '>
        <button className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl' onClick={decreaseHandler}>-</button>
        <div className='font-bold gap-12 text-5xl' >
         {count}
        </div>
        <button className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl' onClick={increaseHandler}>
          +
        </button>

      </div>
      <button className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'  onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default App
