<script>
  export let item;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const open = () => dispatch('open');
</script>

<img src={item.src} alt={item.alt} loading="lazy" on:click={open} />
