import React from 'react';
import Heading from './Heading';


const Learning = () => {
    const Fname = "Harsika";
    const Lname = "Kumari";
    const img = "https://picsum.photos/200";
    const customColor = {
        color: "red",
        fontSize: "60px",
        border: "2px solid black"
    }

    return (
        <div>
            <Heading />

            <h1 style={customColor} > My Favorite Food </h1>
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
