import React, { useContext } from "react";
import AuthContext from "../../Context/auth";
import TodosContext from "../../Context/context";
function Header() {
  const todosContext = useContext(TodosContext);
  const authContext = useContext(AuthContext);

  let doLogin = () => authContext.login();
  let doLogout = () => authContext.logout();

  return (
    <header>
      <div class="navbar navbar-dark bg-dark shadow-sm">
        <div class="container d-flex justify-content-between">
          <a href="#" class="navbar-brand d-flex align-items-center">
            <strong>Todo App</strong>
          </a>
          {!authContext.authenticated ? (
            <button className="btn btn-sm btn-success" onClick={doLogin}>
              login
            </button>
          ) : (
            <button className="btn btn-sm btn-danger" onClick={doLogout}>
              logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
