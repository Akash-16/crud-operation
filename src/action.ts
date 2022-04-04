export const TodoList = (value: any) => {
  // console.log(value)
  return {
    type: "TODO_LIST",
    value: value,
  };
};

export const DeleteList = (value: string) => {
  return {
    type: "DELETE_LIST",
    payload: value,
  };
};

export const updateActions = (value: any) => {
  return {
    type: 'UPDATE_LIST',
    updateList: value
  }
}
