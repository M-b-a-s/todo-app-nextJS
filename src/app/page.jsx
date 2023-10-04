"use client"

import { useState, useEffect } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // get all todos
  const getTodos = async () => {
    try {
      const res = await fetch("https://4296-2c0f-2a80-75-6900-8032-a0b1-5145-259c.ngrok-free.app/todo")
      const data = await res.json()
      setTodos(data)
      console.log(data)
    } catch (error) {
      console.error("Error fetching data: ", error)
    }
    
  }

  useEffect(() => {
    getTodos()
  }, [])

  // create todo
  const addTodo = (title, desc) => {
    setTodos([...todos, {id: Date.now(), title, desc}])
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
