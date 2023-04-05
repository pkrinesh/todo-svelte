<script>
  import Header from './Header.svelte';
  import '../app.css';
  import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex flex-1 flex-col w-full max-w-5xl mx-auto">
    <slot />
  </main>

  <footer class="flex flex-col justify-center items-center p-3 md:px-0">
    <p>
      visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>
