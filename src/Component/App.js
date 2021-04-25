import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

// import Component
import Header from "./Layout/Header";
import FormAddTodo from "./Todo/FormAddTodo";
import Todolist from "./Todo/Todolist";

// import Context
import TodosContext from ".././Context/context";
import AuthContext from ".././Context/auth";

class App extends Component {
  state = {
    todos: [],
    authenticated: false,
  };

  addTodo = (text) => {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, { key: Date.now(), done: false, text }],
      };
    });
  };

  delteTodo = (key) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item.key !== key),
      };
    });
  };

  toggleTodo = (key) => {
    let { todos } = this.state;

    let item = todos.find((item) => item.key === key);
    item.done = !item.done;

    let newtodos = todos.filter((item) => item.key !== key);

    this.setState({
      todos: [...newtodos, item],
    });
  };

  editTodo = (key, text) => {
    let { todos } = this.state;

    let item = todos.find((item) => item.key === key);
    item.text = text;

    let newtodos = todos.filter((item) => item.key !== key);

    this.setState({
      todos: [...newtodos, item],
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: () => {
            this.setState({ authenticated: true });
          },
          logout: () => {
            this.setState({ authenticated: false });
          },
        }}
      >
        <TodosContext.Provider
          value={{
            todos: this.state.todos,
            add: this.addTodo,
            delete: this.delteTodo,
            done: this.toggleTodo,
            edit: this.editTodo,
          }}
        >
          <div className="App">
            <Header />
            <main>
              <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                  <h1 className="jumbotron-heading">Welcome!</h1>
                  <p className="lead text-muted">
                    To get started, add some items to your list:
                  </p>
                  <div className="form-inline">
                    <FormAddTodo />
                  </div>
                </div>
              </section>
              <div className="todosList">
                <div className="container">
                  <div className="d-flex flex-column align-items-center ">
                    <Todolist />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </TodosContext.Provider>
      </AuthContext.Provider>
    );
  }
}

export default App;
