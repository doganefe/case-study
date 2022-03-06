import React, { useState, useEffect, useRef } from "react";
import Person from "../../components/Person/Person";
import { useStateValue } from "../../contextApi/stateProvider";
import actions from "../../contextApi/actions";
import "./List.css";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function scrollbarVisible(element) {
  return element.scrollHeight > element.clientHeight;
}

const List = () => {
  const [{ list }, dispatch] = useStateValue();
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef();

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    const listStoraged = JSON.parse(window.localStorage.getItem("list"));
    if (!listStoraged) {
      try {
        fetch("https://5fc9346b2af77700165ae514.mockapi.io/simpsons")
          .then((res) => res.json())
          .then((res) => {
            dispatch({
              type: actions.SET_LIST,
              payload: res,
            });

            window.localStorage.setItem("list", JSON.stringify(res));
          });
      } catch (err) {
        console.log(err.message);
      }
    } else {
      dispatch({
        type: actions.SET_LIST,
        payload: listStoraged,
      });
    }
  }

  useEffect(() => {
    if (listRef.current) {
      setIsVisible(scrollbarVisible(listRef.current));
    }
  }, [list]);

  return (
    <>
      <Modal />
      <main>
        <h2>Person List</h2>
        <div className="list" ref={listRef}>
          {list.map((person) => (
            <Person
              key={person.id}
              person={person}
              isScrollBarVisible={isVisible}
            />
          ))}
        </div>
      </main>
      <Link className="list__linkBtn" to={"add"}>
        <button className="btn__addperson">+</button>
      </Link>
    </>
  );
};

export default List;
