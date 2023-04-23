import { useEffect, useState } from "react";
import TodosForm from "./TodosForm";
import React from "react";
import TodoCard from "./TodoCard";
function TodoApp() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  console.log(todos);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const dones = todos.filter((item) => item.checked).length;

  return (
    <div className="flex justify-center items-center pt-[40px] pb-6">
      <div className="bg-white w-[90%] lg:w-[70%] flex justify-center items-center flex-col rounded-[10px]">
        <h1 className="text-[45px] font-[700] mb-[20px] mt-[40px] flex justify-center text-slate-600 items-center">
          Todos
        </h1>
        <TodosForm setTodos={setTodos} />
        <div className="">
          {todos.map((item, index) => (
            <TodoCard
              index={index}
              key={item.id}
              setTodos={setTodos}
              todos={todos}
              {...item}
            />
          ))}
        </div>
        <h2 className="text-xl font-semibold text-slate-700 flex justify-center mt-8">
          Jami vazifalar: {todos.length}.
        </h2>
        <h3 className=" text-xl font-semibold mt-[20px] text-slate-700">
          Bajarildi: {dones}.
        </h3>
        <h4 className=" text-xl font-semibold my-[20px] text-slate-700">
          Qoldi: {todos.length - dones}.
        </h4>
      </div>
    </div>
  );
}

export default TodoApp;
