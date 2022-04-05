import * as React from "react";
import * as ReactRedux from "react-redux";

const DeletedData = ({ undoFuntion }: Props) => {
  const deletedList = ReactRedux.useSelector((state: any) => state?.TodoListReducer?.deletedList);
  const completedList = ReactRedux.useSelector((state: any) => state?.TodoListReducer?.completedList);

  const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>, data: any, position: number) => {
    console.log('delete onchange',data);
    undoFuntion('completed',data);   
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h1>DeletedData</h1>
        <div>
          {deletedList?.map((item: any, index: number) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <div>{item.value}</div>
              <button
                onClick={() => undoFuntion('delete',item)}
                style={{ fontSize: "16px", marginLeft: "10px" }}
              >
                undo
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Completed List</h1>
        <div>
          {completedList?.map((item: any, index: number) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              <input type={'checkbox'} checked={item.isCompleted} value={item.value} onChange={(e)=>handleCheckboxChange(e,item, index)} style={{marginLeft:'10px'}} />
              <div>{item.value}</div>
              {/* <button
                onClick={() => undoFuntion(item)}
                style={{ fontSize: "16px", marginLeft: "10px" }}
              >
                undo
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Props {
  undoFuntion: (type: string, item: string) => void;
}

export default DeletedData;
