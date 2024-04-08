import React from "react";
import Login from "./Login";
import Input from "./Input";


let isLoggedin = false;

function renderConditionaly() {

    if (isLoggedin) {
       return <h1>Hello</h1>
    } else {
        return <form className="form">
            <Input />
            <Login />
        </form>
    }
}

function App() {
    return (
        <div className="container">
            {renderConditionaly()}
        </div>
    );
}

export default App;
