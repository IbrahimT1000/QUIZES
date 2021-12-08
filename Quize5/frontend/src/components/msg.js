import React, { Component } from 'react'

export default class Msg extends Component {
    constructor(){
        super()
        this.state={
           message="",
           message2=""
        }
     }
s
     componentDidMount(){
        this.setState({
           message:"welcome to the jungle"
        })
     }
     componentDidUpdate(preveProps,PrevState){
        if(PrevState.message2 === this.state.message2){
            this.setState({
              message2:'quiz are awesome '
            })
        }
       
        console.log("after updated value",this.state.message);

    }
     render() {
        return (
           <div>
              <h3>{this.state.message}</h3>
              <h3>{this.state.message2}</h3>
           </div>
        )
     }
}
