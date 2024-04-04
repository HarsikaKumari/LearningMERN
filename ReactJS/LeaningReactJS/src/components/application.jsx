import React from "react";
import Learning from "./Learning";
import * as calc from "./calculator.js";

const Application = () => {
    return (
    <div> 
        <div>
            <ul>
                <li> { calc.default(3, 5)} </li>
                <li> { calc.subtract(3, 5)} </li>
                <li> { calc.multiply(3, 5)} </li>
                <li> { calc.divide(3, 5)} </li>
            </ul>
        </div>
        <Learning />
    </div>
    )
}

export default Application;
