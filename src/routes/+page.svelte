<script>
  import Counter from './Counter.svelte';
  import welcome from '$lib/images/svelte-welcome.webp';
  import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-[0.6]">
  <h1 class="w-full">
    <span class="welcome block relative w-full h-0">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img class="absolute block w-full h-full top-0" src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/+page.svelte</strong>
  </h2>

  <Counter />
</section>

<style>
  .welcome {
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }
</style>
