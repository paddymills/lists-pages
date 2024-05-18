import { For, createEffect, createSignal, type Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import styles from './App.module.css';

type TodoItem = { value: string, done: boolean };

const App: Component = () => {
  const [val, setVal] = createSignal<string>('');
  const [todos, setTodos] = createStore<TodoItem[]>([]);

  // stolen from https://www.solidjs.com/examples/todos
  const fromStorage = localStorage.getItem("todos");
  if ( fromStorage !== null ) {
    setTodos(JSON.parse(fromStorage));
  }
  createEffect(() => localStorage.setItem("todos", JSON.stringify(todos)))

  const addTodo = (todo: string) => {
    setTodos(l => [...l, { value: todo, done: false }])
    setVal('');
  }

  return (
    <div class={styles.App}>
        <h1>Lists</h1>
        <input
            onChange={e => addTodo(e.target.value)}
            onInput={e => setVal(e.currentTarget.value)}
            value={val()}
            placeholder='enter todo'
            required
        />
        <ul>
            <For each={todos}>{(todo) =>
              <li>
                <input type="checkbox" checked={todo.done} />
                <input type="text" value={todo.value} />
              </li>
            }</For>
        </ul>
    </div>
  );
};

export default App;
