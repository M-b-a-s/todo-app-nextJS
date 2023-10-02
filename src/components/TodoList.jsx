import { useState } from "react";
// icons
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleEditClick = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSaveClick = (id) => {
    if (editText.trim() !== "") {
      updateTodo(id, editText);
      setEditingId(null);
      setEditText("");
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            className="bg-slate-700 my-2 p-3"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="">
                <input
                className="text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg mb-5"
                placeholder="Edit todo"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="bg-lime-700 text-white-950 p-2 rounded-lg" onClick={() => handleSaveClick(todo.id, todo.text)}>
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                {todo.text}
                <div className="flex">
                  <PencilSquareIcon className="h-5 w-5 cursor-pointer" onClick={() => handleEditClick(todo.id, todo.text)}/>
                  <TrashIcon className="h-5 w-5 cursor-pointer" onClick={() => deleteTodo(todo.id, todo.text)}/>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
