import React,{Component} from "react";
import Die from "./Die";
import "./RollDice.css";
class RollDice extends Component{

      
   

    constructor(props){
        super(props);
        this.state={
             // Face numbers passes as default props 
            diceNumber : ["six","six"],
            rolling : false
        };
        
    }

    randomNumber = ()=>{
        let random1 = Math.floor(Math.random()*5)+1;
        let random2 = Math.floor(Math.random()*5)+1;
        function numToWord(num){
            if(num === 1) return "one";
            if(num === 2) return "two";
            if(num === 3) return "three";
            if(num === 4) return "four";
            if(num === 5) return "five";
            if(num === 6) return "six";
        } 
        this.setState({
            diceNumber : [numToWord(random1),numToWord(random2)],
            rolling : true
        }) 

   // Start timer of one sec when rolling start 
   setTimeout(() => { 
  
    // Set rolling to false again when time over 
    this.setState({ rolling: false }) 
}, 1000)

    }

 
    

    render(){
        return(
            <div>
                <div className="two-dice">
                    <Die rolling = {this.state.rolling} number ={this.state.diceNumber[0]} />
                    <Die rolling = {this.state.rolling} number ={this.state.diceNumber[1]} />
                </div>
                
                <button className={this.state.rolling ? "Dice-rolling" : "Dice-not-rolling" }
                    disabled={this.state.rolling} 
                    onClick={this.randomNumber}> 
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'} 
                </button> 

            </div>
        )
    }
}

export default RollDice;