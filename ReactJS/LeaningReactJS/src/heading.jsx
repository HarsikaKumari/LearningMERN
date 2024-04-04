import React from "react";

const Heading = () => {
    let greeting;
    const Fname = "Harsika";
    const Lname = "Kumari";

    const greetingStyle = {
        color: "red",
        fontWeight: "bold",
    }

    let time = new Date().getHours();

    if (time >= 0 && time <= 12) {
        greeting = "Good Morning"
        greetingStyle.color = "red"

    } else if (time >= 12 && time <= 18) {
        greeting = "Good Afternoon"
        greetingStyle.color = "green"
    } else {
        greeting = "Good Evening"
        greetingStyle.color = "blue"
    }

    return (<div>
        <div>
            <h1 style={greetingStyle}> {greeting} </h1>
        </div>

        <h1> Hello, {Fname + " " + Lname}!!</h1>
        <p> Your lucky number is {Math.floor(Math.random() * 11)}.</p>
    </div>

    )
}

export default Heading;
