import React,{useState} from 'react'

export default function Counter() {
    const [insideInput, setinsideInput] = useState();
    const [changeCounter, setchangeCounter] = useState();
    const [number, setnumber] = useState();
    
 
      return (
         <div>
           <form>
       <label>Enter your number:
         <input type="text" onChange={(setinsideInput)} />
       </label>
     </form>
       <p>You clicked {count} times</p>
       <button onClick={() => setchangeCounter(count + 1)}>
         ChangeNumber
       </button>
         </div>
      )
}
