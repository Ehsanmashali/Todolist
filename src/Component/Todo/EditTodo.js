import React, { useState } from "react";

function EditTodo(props) {
  const [text, settext] = useState(props.text);

  let inputHandler = (e) => {
    settext(e.target.value);
  };
  return (
    <div class="col-6 mb-2">
      <div class="d-flex justify-content-between align-items-center border rounded p-3">
        <input
          value={text}
          onChange={inputHandler}
          className="form-control w-50"
        />
        <div>
          <button
            type="button"
            class="btn btn-info btn-sm mr-1"
            onClick={() => props.edit(text)}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
