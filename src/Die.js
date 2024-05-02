import React,{Component} from "react";
import "./Die.css"
class Die extends Component{
    constructor(props){
        super(props);
        this.state={
         one : "fa-solid fa-dice-one",
         two : "fa-solid fa-dice-two",
         three : "fa-solid fa-dice-three",
         four : "fa-solid fa-dice-four",
         five : "fa-solid fa-dice-five",
         six : "fa-solid fa-dice-six",
         
        }
    }
    render(){
       
        return(
            <div>
               <div className={`Die ${this.props.rolling && 'Die-shaking'}`} >
               <i  className={this.state[this.props.number]} ></i>
               </div> 
            </div>
        )
    }
}

export default Die;