import { useState } from "react";
// icons
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleEditClick = (id, title, desc) => {
    setEditingId(id);
    setEditTitle(title);
    setEditDesc(desc);
  };

  const handleSaveClick = (id) => {
    if (editTitle.trim() !== "" && editDesc.trim() !== "") {
      updateTodo(id, editTitle, editDesc);
      setEditingId(null);
      setEditTitle("");
      setEditDesc("");
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
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                className="text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg mb-5"
                placeholder="Edit todo"
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                />
                <button className="bg-lime-700 text-white-950 p-2 rounded-lg" onClick={() => handleSaveClick(todo.id, todo.title, todo.desc)}>
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold">{todo.title}</span>
                  <span>{todo.desc}</span>
                </div>
                <div className="flex">
                  <PencilSquareIcon className="h-5 w-5 cursor-pointer" onClick={() => handleEditClick(todo.id, todo.title, todo.desc)}/>
                  <TrashIcon className="h-5 w-5 cursor-pointer" onClick={() => deleteTodo(todo.id, todo.title, todo.desc)}/>
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
