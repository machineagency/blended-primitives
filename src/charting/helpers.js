import { SYMBOL_DATA } from "../constants";
import { hexToRgb } from "../utilities/misc";

export function bBoxAllBoundaries(boundaries) {
  let xMin = Infinity;
  let yMin = Infinity;
  let xMax = -Infinity;
  let yMax = -Infinity;

  for (const boundary of boundaries) {
    boundary.forEach(([x, y]) => {
      if (x < xMin) xMin = x;
      if (y < yMin) yMin = y;
      if (x > xMax) xMax = x;
      if (y > yMax) yMax = y;
    });
  }

  return {
    width: Math.abs(xMax - xMin),
    height: Math.abs(yMax - yMin),
    xMin,
    yMin,
    xMax,
    yMax,
  };
}

export function arrToImageData(arr) {
  const length = arr[0].length * arr.length;
  const flat = arr.flat();
  const imageData = new ImageData(arr[0].length, arr.length);

  const rgbPalette = Object.values(SYMBOL_DATA).map(({ color }) =>
    hexToRgb(color)
  );

  // Fill imageData with colors based on the repeat
  for (let index = 0; index < length; index++) {
    const op = flat[index];
    const color = rgbPalette[op]; // RGB color from operation hex color

    imageData.data[index * 4] = color[0]; // Red
    imageData.data[index * 4 + 1] = color[1]; // Green
    imageData.data[index * 4 + 2] = color[2]; // Blue
    imageData.data[index * 4 + 3] = 255; // Alpha
  }

  return imageData;
}
