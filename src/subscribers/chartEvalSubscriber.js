import { GLOBAL_STATE, dispatch } from "../state";
import { rasterizeChart } from "../charting/evalChart";
import { bBoxAllBoundaries, arrToImageData } from "../charting/helpers";
import { scheduleChart } from "../charting/planner";

function debounce(callback, wait) {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

function evalChart() {
  const { boundaries, regions, blocks, paths } = GLOBAL_STATE;

  let { stitchChart, yarnChart, machineChart, yarnSequence, rowMap } =
    rasterizeChart(boundaries, regions, blocks, paths);

  const { passes, yarns } = scheduleChart(machineChart, yarnSequence);

  const timeNeedle = arrToImageData(passes.toReversed());

  const canvas = document.getElementById("timeneedlebitmap");
  if (canvas) {
    canvas.width = passes[0].length;
    canvas.height = passes.length;
    const ctx = canvas.getContext("2d");
    ctx.putImageData(timeNeedle, 0, 0);
  }

  dispatch({
    chart: stitchChart,
    yarnChart,
    machineChart,
    yarnSequence,
    rowMap,
    bbox: bBoxAllBoundaries(boundaries),
    passSchedule: passes,
    timeNeedle: timeNeedle,
    yarnSchedule: yarns,
  });
}

export function chartEvalSubscriber() {
  return () => {
    const debouncedEval = debounce(evalChart, 30);

    evalChart();

    return {
      syncState(state, changes) {
        const found = [
          "boundaries",
          "regions",
          "blocks",
          "paths",
          "tucks",
          "showTimeNeedleView",
        ].some((key) => changes.includes(key));

        if (found) {
          debouncedEval();
        }
      },
    };
  };
}
