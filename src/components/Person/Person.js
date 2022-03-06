import React from "react";
import "./Person.css";
import actions from "../../contextApi/actions";
import { useStateValue } from "../../contextApi/stateProvider";
import { useHistory } from "react-router-dom";
const Person = ({ person, isScrollBarVisible }) => {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  function openModal() {
    dispatch({
      type: actions.OPEN_MODAL,
      payload: person,
    });
  }
  function navigate() {
    history.push(`/kisiler/${person.id}`, person);
  }

  return (
    <div
      className={`person`}
      style={{ marginRight: isScrollBarVisible ? ".5rem" : 0 }}
    >
      <p onClick={navigate}>{person.name}</p>
      <img
        onClick={openModal}
        className="person__delete"
        src={`${process.env.PUBLIC_URL}/imgs/delete.svg`}
        alt=""
      />
    </div>
  );
};

export default Person;
