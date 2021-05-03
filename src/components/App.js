import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then(setToys)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleRemoveToy(id) {
    const toysAfterDelete = toys.filter((toy) => {
      if (toy.id !== id) {
        return toy
      }
    })
    setToys(toysAfterDelete)
  }

  function handleUpdateToy(updatedToy) {
   
    const toysAfterUpdate = toys.map((toy) => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setToys(toysAfterUpdate)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleRemoveToy={handleRemoveToy} handleUpdateToy={handleUpdateToy}/>
    </>
  );
}

export default App;
