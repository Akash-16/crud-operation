import * as React from "react";
import { DeleteList, updateActions } from "./action";
import * as ReactRedux from "react-redux";
import { allPost, getAluser } from './sliceMethod'

const TableData = ({ deleteFunction, isEditFunction, completedFunction }: Props) => {
  const dispatch = ReactRedux.useDispatch();
  const todoList = ReactRedux.useSelector((state: any) => state?.TodoListReducer?.ListData);
  const allData = ReactRedux.useSelector(allPost);
  const datas = ReactRedux.useSelector(getAluser)
  const [indexNumber, setIndexNumber] = React.useState(0);

  console.log(allData)

  const [updateValues, setUpdateValues] = React.useState({
    isUpdate: false,
    updateId: 0,
  });

  const deleteFunctions = (item: any, index: number) => {
    deleteFunction(item, index);
    dispatch(DeleteList(item));
  };

  const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>, data: string, position: number) => {
    if(e.target.checked){
      completeTodo(data)
    }    
  }

  const updateFunction = (item: any, index: number) => {
    setIndexNumber(index);
    dispatch(updateActions(item));
    // if (indexNumber === index) {
    //   isEditFunction();
    // }
    isEditFunction();
    setUpdateValues((prevData) => ({
      ...prevData,
      updateId: index,
      isUpdate: !updateValues.isUpdate,
    }));
  };

  const completeTodo = (item: string) => {
    completedFunction(item)
  }

  return (
    <div style={{ marginTop: "10px" }}>
      {/* <div>
        {allData?.map((item: any, index: number)=>(
          <div>
            <div>{item?.id}</div>
            <div>{item?.title}</div>
            <div>{item?.body}</div>
          </div>
        ))}
      </div> */}
      <div>
        {datas?.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input type={'checkbox'} checked={item.isCompleted} value={item.value} onChange={(e)=>handleCheckboxChange(e,item, index)} style={{marginLeft:'10px'}} />
            <div style={{ marginTop: "10px" }}>{item.value}</div>
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
              {/* <button
                onClick={() => completeTodo(item)}
                style={{ fontSize: "16px", marginLeft: "10px" }}
              >
                Complete
              </button> */}
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
  completedFunction: (item: string) => void
}

export default TableData;
