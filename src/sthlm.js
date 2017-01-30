import { assign } from "lodash";

// *
// * Colors
// *
const colors = [
  "steelblue",
  // "#525252",
  // "#737373",
  // "#969696",
  // "#bdbdbd",
  // "#d9d9d9",
  // "#f0f0f0"
];

const black = "#000";
// *
// * Typography
// *
const sansSerif = 'Helvetica, sans-serif';
const letterSpacing = "normal";
const fontSize = 10;
// *
// * Layout
// *
const baseProps = {
  width: 960,
  height: 500,
  // width: 450,
  // height: 300,
  padding: {top: 40, right: 15, bottom: 30, left: 50},
  colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 0,
  fill: black,
  stroke: "transparent"
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeLinecap = "square";
const strokeLinejoin = "square";

export default {
  axis: assign({
    style: {
      axis: {
        fill: 'red',
        stroke: black,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin,
        // shapeRendering: 'crispEdges',
      },
      axisLabel: assign({}, centeredLabelStyles, {
        padding: 25
      }),
      grid: {
        fill: "transparent",
        stroke: "transparent"
      },
      ticks: {
        size: 6,
        stroke: black,
        // shapeRendering: 'crispEdges',
      },
      tickLabels: baseLabelStyles
    }
  }, baseProps),
  chart: baseProps,
  group: assign({
    colorScale: colors
  }, baseProps),
  line: assign({
    style: {
      data: {
        strokeWidth: 2
      },
      labels: assign({}, baseLabelStyles, {
        textAnchor: "start"
      })
    }
  }, baseProps),
  scatter: assign({
    style: {
      data: {
        fill: 'green',
        stroke: "red",
        strokeWidth: 0
      },
      labels: { display: 'none' }
    }
  }, baseProps),
  tooltip: {
    style: assign({}, centeredLabelStyles, {
      padding: 5,
      pointerEvents: "none"
    }),
    flyoutStyle: {
      stroke: black,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none"
    },
    cornerRadius: 5,
    pointerLength: 10
  },
  legend: {
    colorScale: colors,
    style: {
      data: {
        type: "circle"
      },
      labels: baseLabelStyles
    }
  },
  voronoi: assign({
    style: {
      data: {
        fill: 'transparent',
        stroke: 'transparent',
        strokeWidth: 1,
      },
      labels: assign({}, centeredLabelStyles, {
        padding: 10,
        pointerEvents: "none",
      }),
      flyout: {
        stroke: 'rgba(0,0,0,0.1)',
        strokeWidth: 1,
        fill: "#fff",
        pointerEvents: "none"
      }
    }
  }, baseProps),
};
