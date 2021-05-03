import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleRemoveToy, handleUpdateToy }) {

  const toysArr = toys.map((toy) => {
    return <ToyCard key={toy.id} id={toy.id} name={toy.name} image={toy.image} likes={toy.likes} handleRemoveToy={handleRemoveToy} handleUpdateToy={handleUpdateToy}/>
  })

  return (
    <div id="toy-collection">{toysArr}</div>
  );
}

export default ToyContainer;
