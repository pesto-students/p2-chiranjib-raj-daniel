import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoLists";
import * as Sentry from "@sentry/react";

const App = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <Form
                        input={input}
                        setInput={setInput}
                        todos={todos}
                        setTodos={setTodos}
                    />
                </div>
                <div>
                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
                <button
                    onClick={() => {
                        throw Error("something went wrong");
                    }}
                >
                    Break the world
                </button>
                ;
            </div>
        </div>
    );
};

export default Sentry.withProfiler(App);
