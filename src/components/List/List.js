import React, { useState, useEffect, useRef } from "react";
import Todo from "../Todo/Todo";
import { useStateValue } from "../../contextApi/stateProvider";
import actions from "../../contextApi/actions";
import "./List.css";

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

const List = () => {
  const [{ list }, dispatch] = useStateValue();
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef();

  function clearCompleted() {
    dispatch({
      type: actions.DELETE_COMPLETED_TODOS,
    });
  }

  useEffect(() => {
    if (listRef.current) {
      setIsVisible(scrollbarVisible(listRef.current));
    }
  }, [list]);

  return (
    <main>
      <div className="list" ref={listRef}>
        {list.map((todo) => (
          <Todo key={todo.id} todo={todo} isScrollBarVisible={isVisible} />
        ))}
      </div>
      <button className="btn" onClick={clearCompleted}>
        Clear
      </button>
    </main>
  );
};

export default List;
