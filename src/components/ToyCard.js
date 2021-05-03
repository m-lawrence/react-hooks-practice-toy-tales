// import { useState } from "react";
import React from "react";

function ToyCard({ name, image, likes, id, handleRemoveToy, handleUpdateToy }) {

  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    handleRemoveToy(id)
  }

  function handleLikeClick() {
    // const updatedToy = {
    //   likes: likes + 1
    // }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({likes: likes + 1})
    })
      .then(response => response.json())
      .then(updatedToy => handleUpdateToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
