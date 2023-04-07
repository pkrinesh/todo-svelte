<script>
  import { todoStore } from '$lib/store/todo';

  const { todo, action } = todoStore();
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte - TODO app" />
</svelte:head>

<div>
  <h1 class="text-gray-700 text-3xl font-bold">Welcome to sveltekit powered TODO app</h1>
  <pre>{JSON.stringify($todo, null, 2)}</pre>
</div>
