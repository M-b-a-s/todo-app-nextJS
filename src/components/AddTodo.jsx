import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({title: '', desc: ''});
  const [showError, setShowError] = useState({message: '', hasError: false})

  const handleAddClick = (e) => {
    e.preventDefault()

    // check if input fields are empty
    if (todo.title.trim() === "" || todo.desc.trim() === "") {
      setShowError({message: 'Please add title and description!!!', hasError: true})
    } else {
      // add todo to the todolist
      addTodo(todo.title, todo.desc);
      // clear input fields and error message
      setTodo({ title: "", desc: "" });
      setShowError({message: '', hasError: false})
    }
    
  }
  return (
    <>
      <label htmlFor="text" className="text-black">Title:</label>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg"
        placeholder="Add Title"
        value={todo.title}
        onChange={(e) => {
          setTodo({ ...todo, title: e.target.value });
          setShowError({hasError: false})
        }}
      />
      <label htmlFor="text" className="text-black">Description:</label>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg"
        placeholder="Add Description"
        value={todo.desc}
        onChange={(e) => {
          setTodo({ ...todo, desc: e.target.value });
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
