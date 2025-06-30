import Hammer from 'hammerjs';

export function useGestures(node, { onSwipeLeft, onSwipeRight, onPinchIn, onPinchOut }) {
  const mc = new Hammer.Manager(node);
  mc.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }));
  mc.add(new Hammer.Pinch());

  if (onSwipeLeft) mc.on('swipeleft', onSwipeLeft);
  if (onSwipeRight) mc.on('swiperight', onSwipeRight);
  if (onPinchIn) mc.on('pinchin', onPinchIn);
  if (onPinchOut) mc.on('pinchout', onPinchOut);

  return {
    destroy() {
      mc.destroy();
    }
  };
}
