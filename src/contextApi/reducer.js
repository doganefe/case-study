import actions from "./actions";

export const initialState = {
  list: [],
};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

function createItem(name) {
  return {
    id: uuidv4(),
    name: name,
    completed: false,
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.TOGGLE_ITEM:
      let tempList = [...state.list];
      const id = action.payload;
      tempList = tempList.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });
      return {
        ...state,
        list: tempList,
      };
    case actions.ADD_ITEM:
      const item = createItem(action.payload);
      return {
        ...state,
        list: [...state.list, item],
      };
    case actions.DELETE_COMPLETED_TODOS:
      const filteredList = [...state.list].filter((todo) => !todo.completed);
      return {
        ...state,
        list: filteredList,
      };
    default:
      break;
  }
}
