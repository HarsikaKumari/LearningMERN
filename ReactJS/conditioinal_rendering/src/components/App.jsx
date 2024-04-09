import React, { useState } from "react";
// import Login from "./Login";
// import Register from "./Register";
// var isDone = false;

function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ () => {
                setCount(count + 1);
            }}>+</button>

            <button onClick={ () => {
                setCount(count - 1);
            }}>-</button>
        </div>
    );
}

export default App;
// let isLoggedIn = false;
// let isUserAuthorized = false;

// function App() {
//     return (
//         <div className="container">
//             {isLoggedIn ? <h1>Hello</h1> : <Login /> }
//             {isUserAuthorized ? <Login /> : <Register />}
//         </div>
//     );
// }

/* <p style={isDone && { textDecoration: "line-through" }}> Buy milk </p>
<button onClick={() => {
    isDone = false;
} 
}> Strike </button>
 
<button onClick={() => {
    isDone = true;
}}> UnStrike </button> */
