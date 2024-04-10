import React, { useState } from 'react'

let time = new Date().toLocaleTimeString();

// function sayHi() {
//     console.log("Hey");
// }

const App = () => {
    const [cTime, currentTime] = useState(time);

    setInterval(() => {
        const newTime = new Date().toLocaleTimeString();
        currentTime(newTime);
    }, 1000);

    console.log([cTime]);
    return (
        <div className='container'>
            <h1>{cTime}</h1>

            {/* <button onClick={() => {
                const newTime = new Date().toLocaleTimeString();
                currentTime(newTime);
            }}>Get Time</button> */}

        </div>
    )
}

export default App;