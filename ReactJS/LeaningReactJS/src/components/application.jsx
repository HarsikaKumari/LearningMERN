import React from "react";
import Learning from "./Learning.jsx";
import * as calc from "./calculator.js";
import Contacts from "./Contacts";

const Application = () => {
    return (
    <div> 
        <div>
        <Learning />
        <Contacts />
            <ul>
                <li> { calc.default(3, 5)} </li>
                <li> { calc.subtract(3, 5)} </li>
                <li> { calc.multiply(3, 5)} </li>
                <li> { calc.divide(3, 5)} </li>
            </ul>
        </div>
    </div>
    )
}

export default Application;
