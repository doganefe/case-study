import React, { useState } from "react";
import actions from "../../contextApi/actions";
import { useStateValue } from "../../contextApi/stateProvider";
import "./Form.css";

const Form = () => {
  const [{}, dispatch] = useStateValue();
  const [inp, setInp] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (inp) {
      dispatch({
        type: actions.ADD_ITEM,
        payload: inp,
      });
      setInp("");
    }
  }

  function handleInput(e) {
    const { value } = e.target;
    setInp(value);
  }

  return (
    <form onSubmit={addItem} className="form">
      <input
        value={inp}
        onChange={handleInput}
        className="form__input"
        type="text"
        placeholder="Add your new todo"
        name=""
        id=""
      />
    </form>
  );
};

export default Form;
