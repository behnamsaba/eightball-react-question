import { useState } from "react";
import './EightBall.css';
import randomPick from "./helpers";
import answers from "./answers";


const EightBall = () => {
    const [ message , setMessage ] = useState("Think of a question");
    const [ backgroundColor , setBackgroundColor ] = useState("black");

    const handleClick = () => {
        let randomObj = randomPick(answers);
        setMessage(randomObj.msg);
        setBackgroundColor(randomObj.color)
    }

    const handleReset = () => {
        setMessage("Think of a question");
        setBackgroundColor("black");


    }

    return(
        <div className="EightBall" style={{backgroundColor}} >
            <p className="EightBall-Text" onClick={handleClick}>{message}</p>
            <button className="EightBall-Button" onClick={handleReset}>Reset</button>
        </div>
    )
}


export default EightBall