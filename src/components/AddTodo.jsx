import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [showError, setShowError] = useState({message: '', hasError: false})

  const handleAddClick = (e) => {
    e.preventDefault()

    if (text.trim() === "") {
      setShowError({message: 'Please add todo!!!', hasError: true})

    } else {
      addTodo(text);
      setText("");
      setShowError({message: '', hasError: false})
    }
    
    // console.log(text)
  };

  return (
    <>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg"
        placeholder="Add todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setShowError({hasError: false})
        }}
      />
      {/* <ErrorMsg /> */}
      
      {showError.hasError && <div className="bg-red-700 w-64 rounded-lg animate-pulse mt-1">
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
