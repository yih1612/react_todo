import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ text }) {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <li>
      <div>{text}</div>
      <button onClick={handleClick}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
