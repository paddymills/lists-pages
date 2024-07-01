import { Accessor, useContext, type Component } from "solid-js";

import { TodoContext } from '../App';
import box from '../assets/box.svg';
import check from '../assets/check.svg';
import edit from '../assets/edit.svg';

type TodoItem = { value: string; state: boolean };
type TodoProps = { class?: string; todo: Accessor<TodoItem> };

const Todo: Component<TodoProps> = (props: TodoProps) => {
  function toggleTodo() {
    props.todo().state = !props.todo().state;
  };

  return (
    <div class="inline-flex items-center hover:invert">
      <img
        class="size-6"
        src={props.todo().state ? check : box}
        onClick={() => toggleTodo()}
      />
      <p
        class="select-none grow"
        onClick={() => toggleTodo()}
      >
        {props.todo().value}
      </p>
      <img class="size-6 ps-1" src={edit} />
    </div>
  );
};

export default Todo;
