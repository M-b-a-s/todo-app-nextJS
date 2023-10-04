import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [showError, setShowError] = useState({message: '', hasError: false})

  const handleAddClick = (e) => {
    e.preventDefault()

    if (title.trim() === "") {
      setShowError({message: 'Please add todo!!!', hasError: true})

    } else {
      addTodo(title);
      addTodo(desc);
      setTitle("");
      setDesc("");
      setShowError({message: '', hasError: false})
    }
    
  };

  return (
    <>
      <label htmlFor="text" className="text-black">Title:</label>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg"
        placeholder="Add Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          setShowError({hasError: false})
        }}
      />
      <label htmlFor="text" className="text-black">Description:</label>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg"
        placeholder="Add Description"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value)
          setShowError({hasError: false})
        }}
      />
      
      {showError.hasError && <div className="text-red-700 rounded-lg mt-1">
      {showError.message}
     </div>}

      <button
        type="submit"
        className="text-white mx-3 bg-red-700 rounded-lg p-3 mb-5 hover:bg-red-800 mt-3"
        onClick={handleAddClick}
      >
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;
