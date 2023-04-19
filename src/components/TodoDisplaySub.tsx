import React from "react";
import { useRef } from "react";

const TodoDisplaySub = (props: any) => {
  const i = props.i;
  const item = props.item;
  const setUpdateType = props.setUpdateType;
  const handleUpdate = props.handleUpdate;
  const localRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h4 className="indexBox">{i}</h4>
      <h4 className="colonBox">:</h4>
      <h4 className="idBox">ID - {item.id}</h4>
      <h4 className="colonBox">:</h4>
      <input
        className="todoInputBox"
        defaultValue={item.type}
        onChange={(e) => setUpdateType(e.currentTarget.value)}
        ref={localRef}
      />
      <button
        className="todoInputBox"
        type="button"
        onClick={(e) => {
          console.log(localRef.current?.value);
          handleUpdate({
            variables: { id: item.id, type: localRef.current?.value },
          });
        }}
      >
        Update Todo
      </button>
    </>
  );
};

export default TodoDisplaySub;
