import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import '../App.css';
import Avatar from "./Avatar";
import profile from "../IMG_7954.JPG";

function CreateCard (contacts) {
  return (
    <Card
    id={contacts.id}
    key={contacts.id}
    name={contacts.name}
    img={contacts.imgURL}
    tel={contacts.phone}
    email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={profile} />

     {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
