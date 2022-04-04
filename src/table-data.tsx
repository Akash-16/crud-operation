import * as React from "react";
import { DeleteList, updateActions } from "./action";
import * as ReactRedux from "react-redux";

const TableData = ({ deleteFunction, isEditFunction }: Props) => {
  const dispatch = ReactRedux.useDispatch();
  const todoList = ReactRedux.useSelector((state: any) => state?.TodoListReducer?.ListData);
  const [indexNumber, setIndexNumber] = React.useState(0);

  const [updateValues, setUpdateValues] = React.useState({
    isUpdate: false,
    updateId: 0,
  });

  const deleteFunctions = (item: string, index: number) => {
    deleteFunction(item, index);
    dispatch(DeleteList(item));
  };

  const updateFunction = (item: any, index: number) => {
    setIndexNumber(index);
    dispatch(updateActions(item));
    if (indexNumber === index) {
      isEditFunction();
    }

    setUpdateValues((prevData) => ({
      ...prevData,
      updateId: index,
      isUpdate: !updateValues.isUpdate,
    }));
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        {todoList?.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "10px" }}>{item}</div>
            <div style={{ marginLeft: "10px" }}>
              <button
                onClick={() => updateFunction(item, index)}
                style={{ fontSize: "16px" }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteFunctions(item, index)}
                style={{ fontSize: "16px", marginLeft: "10px" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  deleteFunction: (item: string, index: number) => void;
  isEditFunction: () => void;
}

export default TableData;
