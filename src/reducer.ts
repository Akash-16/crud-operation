export const TodoListReducer = (state = {}, action: any) => {
  switch (action.type) {
    case "TODO_LIST":
      return {
        ...state,
        ListData: action.value,
      };
    case "DELETE_LIST":
      return {
        ...state,
        deleteValue: action.payload,
      };
    case "DELETED_LIST":
      return {
        ...state,
        deletedList: action.deletedList,
      };
    case "COMPLETED_LIST":
      return {
        ...state,
        completedList: action.completedList,
      };
    case "UPDATE_LIST":
      return {
        ...state,
        values: action.updateList,
      };
    default:
      return state;
  }
};
