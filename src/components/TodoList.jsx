import { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
// icons
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Modal(Delete confirmation dialog)
  const [showModal, setShowModal] = useState(false)

  // show modal 
  const handleDeleteBtnClick = () => {
    setShowModal(true)
  }

  // handle confirmation
  const handleConfirmed = () => {
    deleteTodo()
    setShowModal(false)
  }

  // handle Cancellation
  const handleCanceled = () => {
    setShowModal(false)
  }

  const handleEditClick = (id, title, description) => {
    setEditingId(id);
    setEditTitle(title);
    setEditDesc(description);
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
    <div className="max-h-64 overflow-scroll">
      <ul className="text-left">
        {todos.map((todo) => (
          <li
            className="bg-slate-700 my-2 p-3"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="">
                <input
                className="text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg mb-5"
                placeholder="Edit title"
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                className="text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg mb-5"
                placeholder="Edit descritpion"
                  type="text"
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                />
                <button className="bg-lime-700 text-white-950 p-2 rounded-lg" onClick={() => handleSaveClick(todo.id, todo.title, todo.description)}>
                  Save
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold">{todo.title}</span>
                  <span>{todo.description}</span>
                </div>
                <div className="flex">
                  <PencilSquareIcon className="h-5 w-5 cursor-pointer" onClick={() => handleEditClick(todo.id, todo.title, todo.description)}/>
                  <TrashIcon className="h-5 w-5 cursor-pointer" onClick={() => handleDeleteBtnClick()}/>

                  {showModal && <DeleteConfirmationModal onCancel={handleCanceled} onClose={handleCanceled} onConfirm={handleConfirmed}/>}
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
