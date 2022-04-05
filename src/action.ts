export const TodoList = (value: any) => {
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

export const DeletedList = (value: any) => {
  return {
    type: "DELETED_LIST",
    deletedList:value
  }
}

export const CompletedAction = (value: any) => {
  return {
    type: "COMPLETED_LIST",
    completedList:value
  }
}

export const updateActions = (value: any) => {
  return {
    type: 'UPDATE_LIST',
    updateList: value
  }
}
