import { Index, createContext, createSignal, type Component } from "solid-js";
import { createStore } from "solid-js/store";

type TodoItem = { value: string, state: boolean };

import box from './assets/box.svg';
import check from './assets/check.svg';
import edit from './assets/edit.svg';
import Todo from "./components/Todo";
import { Context } from "../functions/types";

const TodoContext: Context = createContext();

const App: Component = () => {
  const [val, setVal] = createSignal<string>("");
  const [todos, setTodos] = createStore<TodoItem[]>([
    { value: "make dinner", state: true },
    { value: "do dishes", state: false },
    { value: "do amazing thing, what happens if it gets larger", state: false },
  ]);

  const addTodo = (todo: string) => {
    setTodos((l) => [...l, { value: todo, state: false }]);
    setVal("");
  };

  return (
    <TodoContext.Provider value={setTodos}>
      <header class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
        <p>too many lists...</p>
      </header>
      <main class="grow flex items-center place-content-center">
        <div class="flex flex-col rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 p-4 drop-shadow-md">
          <input
            class="rounded mb-4 px-2 py-1"
            onChange={(e) => addTodo(e.target.value)}
            onInput={(e) => setVal(e.currentTarget.value)}
            value={val()}
            placeholder="enter todo"
            required
          />
          <Index each={todos}>
            {(todo, index) => (
              // <Todo todo={todo} />
              <div class="inline-flex items-center hover:invert">
                <img class="size-6" src={todo().state ? check : box}  onClick={() => setTodos(index, "state", !todo().state)}/>
                <p class="select-none grow"  onClick={() => setTodos(index, "state", !todo().state)}>{todo().value}</p>
                <img class="size-6 ps-1" src={edit}/>
              </div>
            )}
          </Index>
        </div>
      </main>
      <footer class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
        <p class="text-end">made with <span class="text-red-500">&hearts;</span> by Patrick Miller</p>
      </footer>
    </TodoContext.Provider>
  );
};

export {App, TodoContext};
