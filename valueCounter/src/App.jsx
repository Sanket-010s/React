
import './App.css'
import { useState } from 'react' 

function App() {

  let [count, setCounter] = useState(0)
  //count acts as variable
  //setCounter is as function 


     let addValue = () => {
      setCounter(count+1);
     }

     let removeValue = () => {
      if(count===0){
        return;
      }else{setCounter(count-1)}
     }

     let resetValue = () => {
      setCounter( count=0)
     }

  return (
    <>
    <h1>Value Counter</h1>
    <button onClick={addValue}>Add value </button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    <br/>
    <h2>Value is : {count}</h2>
    <br/>
    <button name='b3'onClick={resetValue}>Reset Value</button>
    </>
  )
}

export default App
