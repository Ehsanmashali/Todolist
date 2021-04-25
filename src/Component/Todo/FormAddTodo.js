import React, { useState, useContext } from "react";
import TodosContext from "../../Context/context";
import AuthContext from "../../Context/auth";
import axios from "axios";

function FormAddTodo(props) {
  const [text, settext] = useState("");
  const todosContext = useContext(TodosContext);
  const authContext = useContext(AuthContext);

  let doLogin = () => authContext.login();
  let doLogout = () => authContext.logout();

  let formHandler = (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     `https://react-project-e7e4f-default-rtdb.firebaseio.com/todos.json`,
    //     { text, done: false }
    //   )
    //   .then((response) => todosContext.add(text))
    //   .catch((error) => console.log(error));
    todosContext.add(text);
    settext("");
  };
  let inputHandler = (e) => settext(e.target.value);
  return (
    <>
      {authContext.authenticated ? (
        <form className="form-group" onSubmit={formHandler}>
          <input
            type="text"
            class="form-control mx-sm-3"
            placeholder="i want to do ..."
            onChange={inputHandler}
            value={text}
          />
          <button type="submit" class="btn btn-primary">
            add
          </button>
        </form>
      ) : (
        <p className="text-muted"> You Must Be Login ...</p>
      )}
    </>
    // <.>
    //   {authContext.authenticated ? (
    //     <form className="form-group" onSubmit={formHandler}>
    //       <input
    //         type="text"
    //         class="form-control mx-sm-3"
    //         placeholder="i want to do ..."
    //         onChange={inputHandler}
    //         value={text}
    //       />
    //       <button type="submit" class="btn btn-primary">
    //         add
    //       </button>
    //     </form>
    //   ) : (
    //     <form>
    //       <div class="form-group">
    //         {/* <label for="exampleInputEmail1">Email address</label> */}
    //         <input
    //           placeholder="User@gmai.com"
    //           type="email"
    //           className="form-control "
    //         />
    //       </div>
    //       <div class="form-group ">
    //         {/* <label for="exampleInputPassword1">Password</label> */}
    //         <input
    //           placeholder="Type Password..."
    //           type="password"
    //           className="form-control my-3 "
    //         />
    //       </div>
    //       {!authContext.authenticated ? (
    //         <button className="btn btn-sm btn-success" onClick={doLogin}>
    //           login
    //         </button>
    //       ) : (
    //         <button className="btn btn-sm btn-danger" onClick={doLogout}>
    //           logout
    //         </button>
    //       )}
    //     </form>
    //   )}
    // </.>
  );
}

export default FormAddTodo;
