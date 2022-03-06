import React, { useState } from "react";
import actions from "../../contextApi/actions";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../contextApi/stateProvider";
import "./Form.css";

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function createPerson(inp) {
  return {
    name: inp.nameSurname,
    job: inp.jobTitle,
    avatar: inp.imageLink,
    id: uuidv4(),
  };
}

const Form = () => {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();

  const [inp, setInp] = useState({
    nameSurname: "",
    jobTitle: "",
    about: "",
    imageLink: "",
  });

  function addItem(e) {
    e.preventDefault();

    const listStoraged = JSON.parse(window.localStorage.getItem("list"));
    const newPerson = createPerson(inp);
    const newList = [...listStoraged, newPerson];
    window.localStorage.setItem("list", JSON.stringify(newList));

    dispatch({
      type: actions.SET_LIST,
      payload: newList,
    });

    history.push("./");
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setInp((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={addItem} className="form">
      <h2>Add Person</h2>
      <div>
        <label htmlFor="nameSurname">Name Surname</label>
        <input
          value={String(inp.nameSurname)}
          onChange={handleInput}
          className="form__input"
          type="text"
          name="nameSurname"
          required
        />
      </div>
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          value={String(inp.jobTitle)}
          onChange={handleInput}
          className="form__input"
          type="text"
          name="jobTitle"
          required
        />
      </div>
      <div>
        <label htmlFor="about">About</label>
        <input
          value={String(inp.about)}
          onChange={handleInput}
          className="form__input"
          type="text"
          name="about"
        />
      </div>
      <div>
        <label htmlFor="imageLink">Image Link</label>
        <input
          value={String(inp.imageLink)}
          onChange={handleInput}
          className="form__input"
          type="text"
          name="imageLink"
          required
        />
      </div>
      <button type="submit" className="btn btn__add">
        Add Character
      </button>
    </form>
  );
};

export default Form;
