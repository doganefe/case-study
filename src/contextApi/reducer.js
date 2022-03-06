import actions from "./actions";

export const initialState = {
  list: [],
  isModalOpen: false,
  personDetail: "",
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
    case actions.SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case actions.SET_MODAL:
      return {
        ...state,
      };
    case actions.OPEN_MODAL:
      return {
        ...state,
        personDetail: action.payload,
        isModalOpen: true,
      };
    case actions.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      break;
  }
}
