import React from "react";

export default function TodoCard({ task, desk, date, time }) {
  return (
    <div className="flex justify-between bg-white w-[22.5rem] h-[7.5rem] rounded-[1.25rem] px-3 py-4">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <img src={"priority"} alt="Ari" />
          <h1>task</h1>
        </div>
        <h2>desc</h2>
      </div>

      <div className="flex flex-col text-right">
        <span>date</span>
        <span>time</span>
      </div>
    </div>
  );
}
