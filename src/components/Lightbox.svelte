<script>
  import { createEventDispatcher } from 'svelte';
  import { useGestures } from '../lib/gestures.js';
  export let items;
  export let index;
  const dispatch = createEventDispatcher();

  let scale = 1;

  function next() {
    if (index < items.length - 1) index += 1;
  }
  function prev() {
    if (index > 0) index -= 1;
  }
  function close() {
    dispatch('close');
  }

  function gesture(node) {
    return useGestures(node, {
      onSwipeLeft: next,
      onSwipeRight: prev,
      onPinchIn: () => {
        scale = Math.max(1, scale - 0.1);
      },
      onPinchOut: () => {
        scale = Math.min(3, scale + 0.1);
      }
    });
  }
</script>

<div class="lightbox" use:gesture on:click={close}>
  <div class="lightbox-controls">
    <button on:click|stopPropagation={prev}>⟨</button>
    <button on:click|stopPropagation={close}>✕</button>
    <button on:click|stopPropagation={next}>⟩</button>
  </div>
  <img src={items[index].src} alt="" style="transform: scale({scale});" />
</div>
