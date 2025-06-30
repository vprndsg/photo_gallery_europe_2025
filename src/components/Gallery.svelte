<script>
  import { onMount } from 'svelte';
  import { items } from '../lib/data.js';
  import { monitorScroll, scrollMode } from '../lib/scrollSpeed.js';
  import ImageItem from './ImageItem.svelte';
  import NarrationBlock from './NarrationBlock.svelte';
  import Lightbox from './Lightbox.svelte';

  let container;
  let lightboxIndex = null;

  const openLightbox = (idx) => (lightboxIndex = idx);
  const closeLightbox = () => (lightboxIndex = null);

  onMount(() => monitorScroll(container));
</script>

<div bind:this={container} class="gallery {$scrollMode}" style="gap: var(--gap);">
  {#each items as item, i}
    {#if item.type === 'image'}
      <ImageItem {item} on:open={() => openLightbox(i)} class="item" />
    {:else}
      <NarrationBlock {item} class="item narration" />
    {/if}
  {/each}
</div>

{#if lightboxIndex !== null}
  <Lightbox {items} bind:index={lightboxIndex} on:close={closeLightbox} />
{/if}
