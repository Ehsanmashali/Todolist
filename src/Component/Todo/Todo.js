import React, { useState, useContext } from "react";
import EditTodo from "./EditTodo";
import TodosContext from "../../Context/context";

function Todo(props) {
  let { item } = props;

  const todosContext = useContext(TodosContext);
  const [edit, setedit] = useState(false);

  let editHandler = (text) => {
    todosContext.edit(item.key, text);
    setedit(false);
  };
  return (
    <>
      {edit === false ? (
        <div className="col-6 mb-2">
          <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>{item.text}</div>
            <div>
              <button
                type="button"
                className={`btn btn-sm mr-1 ${
                  item.done ? "btn-warning" : "btn-success"
                }`}
                onClick={() => todosContext.done(item.key)}
              >
                {item.done ? "undone" : "Done"}
              </button>
              <button
                type="button"
                className="btn btn-info btn-sm mr-1"
                onClick={() => setedit(true)}
              >
                edit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm ml-1"
                onClick={() => todosContext.delete(item.key)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EditTodo text={item.text} edit={editHandler} />
      )}
    </>
  );
}

export default Todo;
