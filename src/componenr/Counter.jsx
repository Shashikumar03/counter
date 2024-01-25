import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


function Counter({ id, component,value, setComponent }) {
  
  function handleDecrement(id) {
    var t = [];
    component.map((e) => {
      if (e.id == id) {
        e.val--;
      }
      t.push(e)
    })
    setComponent(t);
  }
  function handleIncrement(id) {
      var t = [];
      component.map((e) => {
        if (e.id == id) {
          e.val++;
        }
        t.push(e);
      });
      setComponent(t);
  }
  function handleInput() {}

  function handleDelete(idToBeDeleted) {
    const updatedList = component.filter((item) => item.id !== idToBeDeleted);

    setComponent(updatedList);
  }

  return (
    <>
      <div className="container1">
        <button onClick={()=>handleDecrement(id)}>-</button>
        <input type="text" value={value} onChange={handleInput} />
        <button onClick={()=>handleIncrement(id)}>+</button>
        <div className="delete">
          <DeleteForeverIcon onClick={() => handleDelete(id)} />
        </div>
      </div>
    </>
  );
}

export default Counter;
