import React from "react";
import { nanoid } from "nanoid";
function Todoform({ setTodos }) {
  const addTask = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const { todo } = Object.fromEntries(form.entries());
    const newTodo = { todo: todo, id: nanoid(), checked: false };
    setTodos((p) => [...p, newTodo]);
  };
  return (
    <div className="mb-[40px] ">
      <form action="" onSubmit={addTask}>
        <input
          className="lg:w-[490px] border-[2px] border-slate-500 px-7 rounded-[7px] py-2 text-[20px] font-[500] text-slate-500"
          name="todo"
          type="text"
          placeholder="qilinidigan ishlarni kiriting!"
        />
        <button className="w-[140px] h-[48px] bg-blue-800 text-slate-200 hover:bg-slate-500 hover:text-[#fff] rounded-[6px] mx-[35px] text-[20px]">
          Add
        </button>
      </form>
    </div>
  );
}

export default Todoform;
