import { For, createSignal, type Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import styles from './App.module.css';

type TodoItem = { value: string };

const App: Component = () => {
  const [val, setVal] = createSignal<string>('');
  const [todos, setTodos] = createStore<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos(l => [...l, { value: todo }])
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
            <For each={todos}>{(todo) => <li>{todo.value}</li>}</For>
        </ul>
    </div>
  );
};

export default App;
