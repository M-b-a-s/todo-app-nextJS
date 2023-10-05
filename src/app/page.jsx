"use client";

import { useState, useEffect } from "react";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  // get all todos
  const getTodos = async () => {
    try {
      const res = await fetch(
        "https://87fd-2c0f-2a80-75-6900-1096-f59e-a523-eb4f.ngrok-free.app/todo",
        { headers: new Headers({ "ngrok-skip-browser-warning": "69420" }) }
      );
      const data = await res.json();
      setTodos(data);
      // console.log(data)
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // create todo
  const addTodo = async (title, description) => {
    try {
      const res = await fetch("https://87fd-2c0f-2a80-75-6900-1096-f59e-a523-eb4f.ngrok-free.app/todo", {
      method: "POST",
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": "69420"
      },
      
    })
    if (res.status === 200) {
      const data = await res.json()
      setTodos((todos) => [data, ...todos])
    } else {
      return
    }
    } catch (error) {
      console.error('Error: ', error)
    }
  };

  // edit todo
  const updateTodo = async (id, newTitle, newDesc) => {
    try {
      const res = await fetch(`https://87fd-2c0f-2a80-75-6900-1096-f59e-a523-eb4f.ngrok-free.app/todo?id=${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json charset=UTF-8",
          "ngrok-skip-browser-warning": "69420"
      }
    })
    if (res.status === 200) {
      setTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, desc: newDesc } : todo)
    )
    } else {
      return
    }
    } catch (error) {
      console.error('Error: ', error)
    }

    // setTodos(updatedTodos);
  };

  // delete todo
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`https://87fd-2c0f-2a80-75-6900-1096-f59e-a523-eb4f.ngrok-free.app/todo?id=${id}`, {
        method: 'DELETE',
        headers: {
          "Content-type": "application/json charset=UTF-8",
          "ngrok-skip-browser-warning": "69420"
        }
      })
        if (res.status === 200){
          setTodos(
            todos.filter((todo) => {
              return todo.id !== id
            })
          )
        } else {
          return
        }
    } catch (error) {
      console.error("Error: ", error)
    }
  };
  return (
    <main className="bg-gray-300 w-full h-screen flex items-center">
      <div className="w-[500px] mx-auto text-center bg-white pt-8 pb-2 px-3">
        <h1 className="text-slate-950 text-4xl font-bold mb-5">Todos</h1>
        <form>
          <AddTodo addTodo={addTodo} />
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        </form>
      </div>
    </main>
  );
};

export default Home;
