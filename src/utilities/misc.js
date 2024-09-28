import { dispatch } from "../state";

export function closeModals() {
  // Close all modals (e.g., on escape or click outside taskbar)
  dispatch({
    showExampleLibrary: false,
    showSettings: false,
    showDownload: false,
    showUpload: false,
  });
}

export function measureWindow() {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
  document.documentElement.style.setProperty(
    "--vw",
    `${window.innerWidth * 0.01}px`
  );
}

export function setCanvasSize(canvas, width, height) {
  // Resizes the canvas to match the shaping boundary
  canvas.width = width;
  canvas.height = height;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
}

export function currentTargetPointerPos(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return [e.clientX - rect.left, rect.height - (e.clientY - rect.top)];
}

export function pointerPosInElement(e, el) {
  const rect = el.getBoundingClientRect();
  return [e.clientX - rect.left, rect.height - (e.clientY - rect.top)];
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0];
}

export function boundaryBbox(boundary) {
  let xMin = Infinity;
  let yMin = Infinity;
  let xMax = -Infinity;
  let yMax = -Infinity;

  boundary.forEach(([x, y]) => {
    if (x < xMin) xMin = x;
    if (y < yMin) yMin = y;
    if (x > xMax) xMax = x;
    if (y > yMax) yMax = y;
  });

  return {
    width: Math.abs(xMax - xMin),
    height: Math.abs(yMax - yMin),
    xMin,
    yMin,
    xMax,
    yMax,
  };
}
