import * as React from "react";
import TableData from "./table-data";
import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "./action";

const FormInputs = () => {
  const updateList = useSelector((state: any) => state?.TodoListReducer?.values);
  const deleteValues = useSelector((state: any) => state?.TodoListReducer);
  const [todoValues, setTodoValues] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<any>([]);
  const [isEdit, setisEdit] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const createList = () => {
    const list = [...todoList];
    list.push(todoValues);
    setTodoList(list);
    dispatch(TodoList(list));
    setTodoValues("");
  };

  const deletData = (data: string, index: number) => {
    console.log(deleteValues)
    const list = [...todoList];
    list.splice(list.indexOf(data), 1);
    setTodoList(list);
    dispatch(TodoList(list));
  }

  const updateData = () => {
      const list = [...todoList];
      const indexValue = list.indexOf(updateList);
      list[indexValue] = todoValues;
      setTodoList(list);
      dispatch(TodoList(list));
      setTodoValues("");
      setisEdit(false)
  }

  React.useEffect(()=>{
    setTodoValues(updateList);
  },[updateList])

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
      <TableData isEditFunction={()=>setisEdit(true)} deleteFunction={(data, index) => deletData(data, index)} />
    </div>
  );
};

export default FormInputs;
