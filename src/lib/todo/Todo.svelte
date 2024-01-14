<script lang="ts" context="module">
    export type TodoItem = { id: string | null, title: string, desc: string };
</script>
  
<script lang="ts">

export let item: TodoItem;

</script>

<li>{item.title}</li>