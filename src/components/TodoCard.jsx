import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
function TodoCard({ todo, index, setTodos, todos, id, checked }) {
  const checkTaskHundler = (e) => {
    const ckeckedTasks = todos.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setTodos(ckeckedTasks);
  };
  const deleteBtn = () => {
    const filtered = todos.filter((item) => item.id != id);
    setTodos(filtered);
  };
  return (
    <div className="">
      <div
        key={index}
        className=" w-[300px] md:w-[670px] flex justify-between items-center rounded-[10px]  bg-blue-900 py-4 px-4 border border-blue-900 shadow-2xl shadow-slate-900"
      >
        <h3 className="text-xl text-white font-semibold">
          {index + 1}.{todo}
        </h3>
        <div className="flex  items-center space-x-[20px] lg:space-x-[40px]">
          <input
            checked={checked}
            onChange={checkTaskHundler}
            type="checkbox"
          />
          <BsFillTrashFill
            className="text-white text-[22px]"
            onClick={deleteBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
