<script lang="ts">
  import TodoList from './lib/todo/TodoList.svelte';
  import WishList from './lib/wish/WishList.svelte';
  import Notes from './lib/notes/Notes.svelte';


  let selected = "todo";
</script>

<main>
  <div>
    <button class:active={ selected === "todo" } on:click={ () => selected = "todo"}>Todolist</button>
    <button class:active={ selected === "wish" } on:click={ () => selected = "wish"}>Wishlist</button>
    <button class:active={ selected === "notes" } on:click={ () => selected = "notes"}>Notes</button>
  </div>

  {#if selected === "todo" }
  <TodoList />
  {:else if selected === "wish" }
  <WishList />
  {:else if selected === "notes"}
  <Notes />
  {/if}
</main>

<style lang="scss">
  div {
    display: inline-block;
    border-radius: 0.5rem;
    background-color: aliceblue;
    padding: 1rem;
  }

  .active {
    font-weight: bold;
  }
</style>
