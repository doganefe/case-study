import React from "react";
import "./Todo.css";
import actions from "../../contextApi/actions";
import { useStateValue } from "../../contextApi/stateProvider";

const Todo = ({ todo, isScrollBarVisible }) => {
  const [{}, dispatch] = useStateValue();

  function toggle() {
    dispatch({
      type: actions.TOGGLE_ITEM,
      payload: todo.id,
    });
  }

  return (
    <div
      className={`todo`}
      // className={`todo ${todo.completed ? "toggled" : ""}`}
      style={{ marginRight: isScrollBarVisible ? ".5rem" : 0 }}
      onClick={toggle}
    >
      <div
        className={`todo__checkbox ${todo.completed ? "green" : "gray"}`}
      ></div>
      <p>{todo.name}</p>
    </div>
  );
};

export default Todo;
