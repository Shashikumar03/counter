import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Counter from "./componenr/Counter";

function App() {
  const [component, setComponent] = useState([]);
  function handleAdd() {
    const id = uuidv4();
    const data = { id: id, val: 0 };
    setComponent([...component, data]);
  }

  function handleReset() {
    const resetValue = component.map((item) => {
      item.val = 0;
      return item;
    });
    setComponent(resetValue);
  }

  return (
    <>
      <div className="main-container">
        {component.map((a) => {
          return (
            <div>
              <Counter
                id={a.id}
                setComponent={setComponent}
                component={component}
                value={a.val}
              />
            </div>
          );
        })}
        <button onClick={handleAdd}> add Counter</button>
        <button onClick={handleReset}>ResetAll</button>
      </div>
    </>
  );
}

export default App;
