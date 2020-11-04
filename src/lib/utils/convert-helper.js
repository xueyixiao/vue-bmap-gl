export function toPixel(arr) {
  return new BMapGL.Pixel(arr[0], arr[1]);
}

export function toSize(arr) {
  return new BMapGL.Size(arr[0], arr[1]);
}

export function pixelTo(pixel) {
  if (Array.isArray(pixel)) return pixel;
  return [pixel.getX(), pixel.getY()];
}

export function toLngLat(arr) {
  return new BMapGL.Point(arr[0], arr[1]);
}

export function lngLatTo(lngLat) {
  if (!lngLat) return;
  if (Array.isArray(lngLat)) return lngLat.slice();
  return [lngLat.getLng(), lngLat.getLat()];
}

/**
 * @param arrs 二重数组 southWest, northEast
 */
export function toBounds(arrs) {
  return new BMapGL.Bounds(toLngLat(arrs[0]), toLngLat(arrs[1]));
}

export const commonConvertMap = {
  position: toLngLat,
  offset: toSize
  /*  bounds: toBounds,
    LngLat: toLngLat,
    Pixel: toPixel,
    Size: toSize,
    Bounds: toBounds*/
};
