import * as React from "react";
import TableData from "./table-data";
import DeletedData from "./deleted-data";
import { useDispatch, useSelector } from "react-redux";
import { TodoList, DeletedList, CompletedAction } from "./action";

const FormInputs = () => {
  const updateList = useSelector(
    (state: any) => state?.TodoListReducer?.values
  );
  const deleteValues = useSelector((state: any) => state?.TodoListReducer);
  const [deletedlist, setDeletedList] = React.useState<any>([]);
  const [completedlist, setCompletedList] = React.useState<any>([]);
  const [todoValues, setTodoValues] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<any>([]);
  const [isEdit, setisEdit] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const createList = () => {
    const list = [...todoList];
    list.push({
      id: todoValues.toUpperCase(),
      value: todoValues,
      isCompleted: false,
    });
    setTodoList(list);
    dispatch(TodoList(list));
    setTodoValues("");
  };

  const deletData = (data: any, index: number) => {
    const deletedList = [...deletedlist];
    deletedList.push(data);
    const list = [...todoList];
    list.splice(list.indexOf(data), 1);
    setTodoList(list);
    dispatch(DeletedList(deletedList));
    setDeletedList(deletedList);
    dispatch(TodoList(list));
  };

  const updateData = () => {
    const list = [...todoList];
    const indexValue = list.indexOf(updateList);
    list[indexValue] = todoValues;
    setTodoList(list);
    dispatch(TodoList(list));
    setTodoValues("");
    setisEdit(false);
  };

  const undoList = (type: string, item: any) => {
    if (type === "delete") {
      const list = [...todoList];
      const deletedList = [...deletedlist];
      deletedList.splice(deletedList.indexOf(item), 1);
      dispatch(DeletedList(deletedList));
      setDeletedList(deletedList);
      list.push(item);
      setTodoList(list);
      dispatch(TodoList(list));
    } else {
      const list = [...todoList];
      const completed = [...completedlist];
      const samObj = {...item, isCompleted: false};
      console.log(samObj);
      completed.splice(completed.indexOf(item), 1);
      setCompletedList(completed);
      list.push(samObj);
      setTodoList(list);
      dispatch(TodoList(list));
      dispatch(CompletedAction(completed));
    }
  };

  const completedList = (item: any) => {
    const list = [...todoList];
    const completedValues = [...completedlist];
    if (!completedValues.includes(item)) {
      completedValues.push({...item, isCompleted: true});
      setCompletedList(completedValues);
    }
    list.splice(list.indexOf(item), 1);
    setTodoList(list);
    dispatch(TodoList(list));
    dispatch(CompletedAction(completedValues));
  };

  React.useEffect(() => {
    if (updateList) {
      setTodoValues(updateList?.value);
    }
  }, [updateList]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          value={todoValues}
          onChange={(e) => setTodoValues(e.target.value)}
          placeholder="Enter your list"
        />
        {!isEdit ? (
          <button
            onClick={createList}
            style={{ marginLeft: "10px", fontSize: "19px" }}
          >
            Create
          </button>
        ) : (
          <button
            onClick={updateData}
            style={{ marginLeft: "10px", fontSize: "19px" }}
          >
            Update
          </button>
        )}
      </div>
      <TableData
        completedFunction={(item: string) => completedList(item)}
        isEditFunction={() => setisEdit(true)}
        deleteFunction={(data, index) => deletData(data, index)}
      />
      <DeletedData
        undoFuntion={(type: string, item: any) => undoList(type, item)}
      />
    </div>
  );
};

export default FormInputs;
