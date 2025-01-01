import { useEffect, useState } from "react";
import Input from "./components/Input";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState([]);

  // load items from localstorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    if(savedTasks) {
      setItems(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  function handleAdd(newItem) {
    const exists = items.find(item => item.text === newItem.text);
    if (!exists) {
      setItems([...items, newItem]);
    }
    console.log(items);
  }

  function taskCompletion(id) {
    setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item));
  }

  function taskDeletion(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div>
      <h3 className="inter text-center my-6 text-[32px] font-semibold">Todo List App with React.js</h3>

      <div className="max-w-[500px] min-h-[350px] p-12 rounded-2xl bg-[#F5F5F5] shadow-2xl box-border mx-auto">
        <Input handleAdd={handleAdd} />
        <hr className="my-2 border border-gray-400 rounded-2xl" />

        <ListItems items={items} taskCompletion={taskCompletion} taskDeletion={taskDeletion} />
      </div>
    </div>
  )
}

export default App
