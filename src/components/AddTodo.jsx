import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAddClick = (e) => {
    e.preventDefault()

    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    } else {
        alert('No todo added!!!')
    }
    
    // console.log(text)
  };
  return (
    <>
      <input
        type="text"
        className=" text-black border-2 border-slate-700 p-3 w-full placeholder:text-grey-950 rounded-lg mb-5"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white mx-3 bg-red-700 rounded-lg p-3 mb-5 hover:bg-red-800"
        onClick={handleAddClick}
      >
        Add Todo
      </button>
    </>
  );
};

export default AddTodo;
