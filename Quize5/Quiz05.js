/*=================  Quiz05: React functional and class components methode =================== */


/* 1- create a react class component and do the following:
   a- create a state called message and initialize it as an empty string, then insert it inside the the returned component.
   b- when the component mounts, change the value of the message state the value to the string "welcome to the jungle"
   c- create a state called message2 and do the same steps as in a and b but change the message2 to "quiz are awesome :)" state when the component updates.
   d- notice what happens in when you run the component and explain it
   e- write a code to prevent this behavior, and explain it
*/
/*       write your code her      */
   // import React, { Component } from 'react'
   
   // export default class Quiz05 extends Component {
   //    constructor(){
   //       super()
   //       this.state={
   //          message="",
   //          message2=""
   //       }
   //    }

   //    componentDidMount(){
   //       this.setState({
   //          message:"welcome to the jungle"
   //       })
   //    }
   //    componentDidUpdate(preveProps,PrevState){
   //       if(PrevState.message2 !== this.state.message2){
   //           this.setState({
   //             message2:'quiz are awesome '
   //           })
   //       }
        
   //       console.log("after updated value",this.state.message);

   //   }
   //    render() {
   //       return (
   //          <div>
   //             <h3>{this.state.message}</h3>
   //             <h3>{this.state.message2}</h3>
   //          </div>
   //       )
   //    }
   // }
   


/* 2- create a functional react component that has a state "insideInput", a state "changeCounter", and a state "number". then add/do the following:
    a- add an input and make it change the "insideInput" state only when you press enter.
    b- add a button that (when clicked) will add 1 to changeCounter and have it rendered above the button
    c- generate a random number to be put inside the number and render it whenever changeCounter is changed
  */

/*       write your code her      */

//   import React,{useState} from 'react'

//   export default function Quiz05() {
//    const [insideInput, setinsideInput] = useState();
//    const [changeCounter, setchangeCounter] = useState();
//    const [number, setnumber] = useState();
   

//      return (
//         <div>
//           <form>
//       <label>Enter your number:
//         <input type="text" onChange={(setinsideInput)} />
//       </label>
//     </form>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setchangeCounter(count + 1)}>
//         ChangeNumber
//       </button>
//         </div>
//      )
//   }
  



/* 3- connect the previous two components inside a react app, and add the following:
   a- create a state "crossingState" inside app.js.
   b- render the state inside the class component that you made
   c- have the state setter inside the functional component and make the change method using a dropdown list
   d- the dropdown list will have 5 choices, each choice will be a day of the week, and the state will change based on the day chosen
*/

/*       write your code her      */


