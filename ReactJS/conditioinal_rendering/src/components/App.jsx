import React from "react";
import Login from "./Login";
import Register from "./Register";

// let isLoggedIn = false;
let isUserAuthorized = false;

function App() {
    return (
        <div className="container">
            {/* {isLoggedIn ? <h1>Hello</h1> : <Login /> } */}
            {isUserAuthorized ? <Login /> : <Register />}
        </div>
    );
}

export default App;
