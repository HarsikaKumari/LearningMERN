import React from 'react'

function Card(props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <img
        src={props.url}
        alt="avatar_img"
      />
      <p> {props.number} </p>
      <p> {props.email} </p>
    </div>
  )
}

function contacts() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        url="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        number="+123 456 789"
        email="b@beyonce.com"
      />

      <br />

      <Card
        name="Isha"
        url="https://media.istockphoto.com/id/148950212/photo/sloth-bear.jpg?s=612x612&w=0&k=20&c=pXrIyRb2uKTxR0-wx3dqdAR6YL8l9JgFriSanVAwhGA="
        number="587837985"
        email="ishuul@aa.com"
      />

      <br />

      <Card
        name="Shishir"
        url="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-dog_23-2150780984.jpg?size=626&ext=jpg"
        number="774866866"
        email="Shhishhir@shek.com"
      />

    </div>
  )
}

export default contacts;
