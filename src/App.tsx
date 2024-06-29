import { For, createSignal, type Component } from "solid-js";
import { createStore } from "solid-js/store";

type TodoItem = { value: string };

import box from './assets/box.svg';

const App: Component = () => {
  const [val, setVal] = createSignal<string>("");
  const [todos, setTodos] = createStore<TodoItem[]>([
    { value: "make dinner" },
    { value: "do dishes" },
    { value: "do amazing thing" },
  ]);

  const addTodo = (todo: string) => {
    setTodos((l) => [...l, { value: todo }]);
    setVal("");
  };

  return (
    <>
      <header class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
        <p>too many lists...</p>
      </header>
      <main class="grow flex items-center place-content-center">
        <div class="grid grid-cols-2 gap-2 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500 p-4">
          <input
            class="col-span-full rounded px-2 py-1"
            onChange={(e) => addTodo(e.target.value)}
            onInput={(e) => setVal(e.currentTarget.value)}
            value={val()}
            placeholder="enter todo"
            required
          />
          <For each={todos}>
            {(todo) => (
              <>
                <img class="col-start-1 size-4" src={box}/>
                <p>{todo.value}</p>
              </>
            )}
          </For>
        </div>
      </main>
      <footer class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4">
        <p class="text-end">made with <span class="text-red-500">&hearts;</span> by Patrick Miller</p>
      </footer>
    </>
  );
};

export default App;
