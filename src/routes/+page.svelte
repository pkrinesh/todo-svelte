<script>
  import AddTodo from './add-todo.svelte';
  import Todo from './todo.svelte';
  import Progress from './progress.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte - TODO app" />
</svelte:head>

<div class="min-h-screen bg-olive-one p-0 selection:bg-olive-four md:px-8 md:py-24">
  <main
    class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5
    py-10 outline-none md:min-h-max md:w-[60rem] md:max-w-[60rem] md:rounded-2xl md:px-8
    md:outline md:outline-4 md:outline-offset-8 md:outline-cream-four"
  >
    <h1 class="text-2xl font-bold text-gray-three">Dashboard</h1>
    <div class="mt-10">
      <AddTodo />
      <Todo />
      <Progress />
    </div>
  </main>
</div>
