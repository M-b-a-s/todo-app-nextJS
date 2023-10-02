"use client"

import { useState } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // create todo
  const addTodo = (text) => {
    setTodos([...todos, {id: Date.now(), text}])
  }

  // edit todo
  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo);

    setTodos(updatedTodos)
  }

  // delete todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }
  return (
    <main className="bg-gray-300 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white pt-8 pb-2 px-3">
        <h1 className="text-slate-950 text-4xl font-bold mb-5">Todos</h1>
        <form>
          <AddTodo addTodo={addTodo}/>
          <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        </form>
      </div>
    </main>
  );
};

export default Home;
