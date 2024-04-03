import React from 'react';

const Learning = () => {
    const Fname = "Harsika";
    const Lname = "Kumari";
    const img = "https://picsum.photos/200";
    let greeting;
    const customColor = {
        color: "red",
        fontSize: "60px",
        border: "2px solid black"
    }

    const grettingStyle = {
        color: "red",
        fontWeight: "bold",
    }

    let time = new Date().getHours();

    if (time >= 0 && time <= 12) {
        greeting = "Good Morning"
        grettingStyle.color = "red"

    } else if (time >= 12 && time <= 18) {
        greeting = "Good Afternoon"
        grettingStyle.color = "green"
    } else {
        greeting = "Good Evening"
        grettingStyle.color = "blue"
    }
    return (
        <div>

            <div>
                <h1 style={grettingStyle}> {greeting} </h1>
            </div>

            <h1> Hello, {Fname + " " + Lname}!!</h1>
            <p> Your lucky number is {Math.floor(Math.random() * 11)}.</p>

            <h1 style={customColor} > My Favourite Food </h1>
            <div>
                <img alt="bhindi" src="https://media.istockphoto.com/id/1208754471/photo/gajar-ka-halwa.jpg?s=1024x1024&w=is&k=20&c=bS1tDrUJ82TCtAeQPrtTb_JgJqb-cmHSEHR0ZU_mZGg=" />

                <img alt="DaalChawal" src="http://cms.patrika.com/wp-content/uploads/2018/09/10/bhindi_masala_spicy_okra_3390861-m.jpg" />

                <img alt="LittiChokha" src="https://qph.cf2.quoracdn.net/main-qimg-5653c93ba0a78493b4f756f6d51ad2bf" />
            </div>

            <div>
                <img src={img + "?grayStyle"} alt='random ' />
            </div>

            <center>
                <p>
                    Created by {Fname} {Lname} ❤️
                </p>

                <p>
                    © Copyright {new Date().getFullYear()}
                </p>
            </center>
        </div>
    )
}

export default Learning;