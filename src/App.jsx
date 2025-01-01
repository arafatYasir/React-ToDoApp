import { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [items, setItems] = useState([]);

  function handleAdd(newItem) {
    const exists = items.find(item => item.text === newItem.text);
    if (!exists) {
      setItems([...items, newItem]);
    }
    console.log(items);
  }

  return (
    <div>
      <h3 className="inter text-center my-6 text-[32px] font-semibold">Todo List App with React.js</h3>

      <div className="max-w-[500px] min-h-[350px] p-12 rounded-2xl bg-[#F5F5F5] shadow-2xl box-border mx-auto">
        <Input handleAdd={handleAdd} />
      </div>
    </div>
  )
}

export default App
