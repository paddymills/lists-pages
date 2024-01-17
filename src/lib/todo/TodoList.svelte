<script lang="ts">
  import { onMount } from "svelte";
  import { writable, type Writable } from "svelte/store";
  import Todo, { type TodoItem } from "./Todo.svelte";

  let todos: Writable<TodoItem[]> = writable([]);
  let todoValues: TodoItem[] = [];

  let todoText: string = "";

  onMount(() => {
    todos.set(JSON.parse(localStorage.getItem("todos") || "[]"));

    todos.subscribe((value) => {
      todoValues = value;

      // update local storage
      localStorage.setItem("todos", JSON.stringify(value));

      // TODO: post to pages function
    });
  });

  function addTodo() {
    if (todoText === "") return;

    todos.update((value) => {
      // TODO: await id from pages function (KV/R1)
      value.push({ id: null, title: todoText, desc: "" });

      return value;
    });

    // reset text
    todoText = "";
  }
</script>

<main>
  <h1>Todo list</h1>

  <!-- TODO: description -->
  <!-- TODO: edit/delete buttons -->
  <ul>
    {#each todoValues as todo}
      <Todo item={todo} />
    {/each}
  </ul>

  <div class="addTodo">
    <input type="text" bind:value={todoText} />
    <button on:click={addTodo}>add</button>
  </div>
</main>

<style lang="scss">
  .addTodo {
    display: inline;
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
