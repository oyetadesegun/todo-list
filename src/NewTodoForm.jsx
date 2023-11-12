import { useState } from "react";
const NewTodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title: newItem, completed: false },
          ];
        });
      }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />
        </div>
        <button className="btn">Add</button>
      </form>
  )
}

export default NewTodoForm