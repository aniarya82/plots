// You can reproduce this figure in plotly.js with the following code!

// Learn more about plotly.js here: https://plot.ly/javascript/getting-started

/* Here's an example minimal HTML template
 *
 * <!DOCTYPE html>
 *   <head>
 *     <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
 *   </head>
 *   <body>
 *   <!-- Plotly chart will be drawn inside this div -->
 *   <div id="plotly-div"></div>
 *     <script>
 *     // JAVASCRIPT CODE GOES HERE
 *     </script>
 *   </body>
 * </html>
 */
myDiv = document.getElementById('tester')
var trace = {
  x: [30.9, 32.3, 34.2, 42.8, 50.1, 53.1, 56.5, 62.4, 20.3, 36.3, 49.1, 50.1, 58.5, 51.2, 61, 44.8, 65, 65.2, 61, 67.6, 76.8, 64.7, 80.8, 54.3, 38.2, 40.6, 45.7, 52.3, 61.9, 70.6],
  y: [27.8, 23.1, 25.2, 27.2, 34.7, 42.1, 40.8, 26.9, 29.1, 45.1, 57.4, 62.5, 65, 68.8, 72.3, 75.6, 78.5, 79.8, 79.9, 85.3, 85.2, 93.7, 94.3, 95.8, 40, 42.7, 47.4, 51.6, 64.8, 71.7],
  line: {color: "rgb(152, 195, 121)"},
  marker: {
    color: "rgb(54, 2, 65)",
    line: {
      color: "rgb(204, 204, 204)",
      width: 0.5
    },
    size: 12,
    symbol: "circle"
  },
  mode: "markers",
  name: "Sequence",
  type: "scatter"
};
var dt = [trace];
var trace1 = {
  x: [20.3, 36.3, 49.1, 50.1, 58.5, 51.2, 61, 44.8, 65, 65.2, 61, 67.6, 76.8, 64.7, 80.8, 54.3],
  y: [29.1, 45.1, 57.4, 62.5, 65, 68.8, 72.3, 75.6, 78.5, 79.8, 79.9, 85.3, 85.2, 93.7, 94.3, 95.8],
  line: {color: "rgb(31, 110, 106)"},
  marker: {
    color: "rgb(254, 222, 62)",
    line: {
      color: "rgb(204, 204, 204)",
      width: 0.5
    },
    size: 12,
    symbol: "circle"
  },
  mode: "markers",
  // name: "Did better than parents",
  name: "Sequence 1",
  // text: ["Farming, fishing and forestry", "Truck drivers, heavy equipment operators, etc.", "Mechanics, repairmen, etc.", "Human resources, etc.", "Teachers", "Nurses", "Accountants and auditors", "Police officers and firefighters", "Managers", "Engineers, architects and surveyors", "Computer programmers", "Legal support workers", "Financial analysts and advisers", "Chief executives", "Lawyers and judges", "Doctors, dentists and surgeons"],
  type: "scatter",
  uid: "03992d"
};
var trace2 = {
  x: [30.9, 32.3, 34.2, 38.2, 40.6, 45.7, 47.9, 52.2, 54.0, 57.9, 60.2, 64.9, 66.9, 68.9, 70.9, 73.7, 75.1, 77.9, 79.9, 81.9, 82.1, 84.9, 86.9],
  y: [31.2, 33.1, 33.9, 38.9, 40.1, 42.7, 47.4, 51.6, 54.8, 57.1, 60.4, 64.1, 66.7, 68.3, 70.6, 73.5, 75.8, 77.9, 79.3, 81.2, 83.7, 84.3, 85.8],
  line: {color: "rgb(231, 189, 0)"},
  marker: {
    // color: "rgb(112, 230, 230)",
    color: "rgb(54, 2, 65)",
    line: {
      color: "rgb(217, 217, 217)",
      width: 0.5
    },
    size: 12,
    symbol: "circle"
  },
  mode: "markers",
  // name: "<br>Did about the same as<br>parents<br>",
  name: "Sequence 2",
  // text: ["Construction", "Machinists, welders, etc.", "Factory assembly", "Counselors, social and religious workers", "Media and communications workers", "Physical, life and social sciences"],
  type: "scatter",
  uid: "ee65a4"
};
var trace3 = {
  x: [30.9, 32.3, 34.2, 42.8, 50.1, 53.1, 56.5, 62.4],
    y: [27.8, 23.1, 25.2, 27.2, 34.7, 42.1, 40.8, 26.9],
  line: {color: "rgb(211, 97, 72)"},
  marker: {
    color: "rgb(219, 144, 104)",
    line: {
      color: "rgb(217, 217, 217)",
      width: 0.5
    },
    size: 12,
    symbol: "circle"
  },
  mode: "markers",
  // name: "Did worse than parents",
  name: "Sequence 3",
  // text: ["Janitors, maids, etc.", "Childcare workers", "Food preparation occupations", "Waiters and servers", "Archivists, curators and librarians", "Sales and related", "Secretaries and admin. assistants", "Designers, musicians, artist, etc."],
  type: "scatter",
  uid: "3460bd"
};
var trace4 = {
  x: [26.5, 99],
  y: [27.2, 99],
  line: {
    color: "rgb(194, 195, 197)",
    width: 1
  },
  marker: {size: 12},
  mode: "lines",
  // name: "<br>Best Fit<br>",
  name: "Best Sequence",
  opacity: 0.7,
  type: "scatter",
  uid: "bbbfd3"
};
// var data = [trace1, trace2, trace3, trace4];
var data = [trace2];
var layout = {
  // annotations: [
  //   {
  //     x: 50.5721251043,
  //     y: 95.9064867968,
  //     align: "right",
  //     arrowcolor: "",
  //     arrowhead: 1,
  //     arrowsize: 1,
  //     arrowwidth: 0,
  //     ax: -83,
  //     ay: 7.23333740234,
  //     bgcolor: "rgba(0,0,0,0)",
  //     bordercolor: "",
  //     borderpad: 1,
  //     borderwidth: 1,
  //     font: {
  //       color: "rgb(102, 102, 102)",
  //       family: "",
  //       size: 14
  //     },
  //     opacity: 1,
  //     showarrow: true,
  //     text: "Doctors, dentists,<br>and surgeons",
  //     xanchor: "auto",
  //     xref: "x",
  //     yanchor: "auto",
  //     yref: "y"
  //   },
  //   {
  //     x: 66.990780741,
  //     y: 27.0649253731,
  //     align: "left",
  //     arrowcolor: "rgb(102, 102, 102)",
  //     arrowhead: 1,
  //     arrowsize: 1,
  //     arrowwidth: 0,
  //     ax: 99,
  //     ay: 5.23333740234,
  //     bgcolor: "rgba(0,0,0,0)",
  //     bordercolor: "",
  //     borderpad: 1,
  //     borderwidth: 1,
  //     font: {
  //       color: "rgb(102, 102, 102)",
  //       family: "",
  //       size: 14
  //     },
  //     opacity: 1,
  //     showarrow: true,
  //     text: "Designers, musicians,<br>and artists",
  //     xanchor: "auto",
  //     xref: "x",
  //     yanchor: "auto",
  //     yref: "y"
  //   }
  // ],
  autosize: false,
  bargap: 0.2,
  bargroupgap: 0,
  barmode: "stack",
  boxgap: 0.3,
  boxgroupgap: 0.3,
  boxmode: "overlay",
  dragmode: "zoom",
  font: {
    color: "rgb(67, 67, 67)",
    family: "Balto, sans-serif",
    size: 12
  },
  height: 675,
  hidesources: false,
  hovermode: "x",
  legend: {
    x: 1.2921255141,
    y: 0.536363636364,
    bgcolor: "rgba(255, 255, 255, 0)",
    bordercolor: "rgba(255, 255, 255, 0)",
    borderwidth: 1,
    font: {
      color: "",
      family: "",
      size: 10
    },
    traceorder: "normal",
    xanchor: "auto",
    yanchor: "auto"
  },
  margin: {
    r: 80,
    t: 100,
    autoexpand: true,
    b: 80,
    l: 80,
    pad: 0
  },
  paper_bgcolor: "rgb(231, 228, 221)",
  plot_bgcolor: "rgb(231, 228, 221)",
  separators: ".,",
  showlegend: false,
  smith: false,
  title: "Dot Plot Visualisation",
  titlefont: {
    color: "",
    family: "",
    size: 0
  },
  width: 750,
  xaxis: {
    anchor: "y",
    autorange: true,
    autotick: true,
    domain: [0, 1],
    dtick: 10,
    exponentformat: "e",
    gridcolor: "rgba(217, 217, 217, 0.7)",
    gridwidth: 1,
    linecolor: "#000",
    linewidth: 1,
    mirror: false,
    nticks: 12,
    overlaying: false,
    position: 0,
    range: [13.8885045071, 108.172444332],
    rangemode: "normal",
    showexponent: "all",
    showgrid: true,
    showline: true,
    showticklabels: true,
    tick0: 0,
    tickangle: "auto",
    tickcolor: "#000",
    tickfont: {
      color: "",
      family: "",
      size: 0
    },
    ticklen: 5,
    ticks: "",
    tickwidth: 1,
    title: "<i>Sequence #id</i>",
    titlefont: {
      color: "",
      family: "",
      size: 0
    },
    type: "linear",
    zeroline: false,
    zerolinecolor: "#000",
    zerolinewidth: 1
  },
  yaxis: {
    anchor: "x",
    autorange: true,
    autotick: true,
    domain: [0, 1],
    dtick: 10,
    exponentformat: "e",
    gridcolor: "rgba(217, 217, 217, 0.7)",
    gridwidth: 1,
    linecolor: "#000",
    linewidth: 1,
    mirror: false,
    nticks: 9,
    overlaying: false,
    position: 0,
    range: [17.5114726027, 103.288869863],
    rangemode: "normal",
    showexponent: "all",
    showgrid: true,
    showline: true,
    showticklabels: true,
    tick0: 0,
    tickangle: "auto",
    tickcolor: "#000",
    tickfont: {
      color: "",
      family: "",
      size: 0
    },
    ticklen: 5,
    ticks: "",
    tickwidth: 1,
    title: "<i>Sequence #id</i>",
    titlefont: {
      color: "",
      family: "",
      size: 0
    },
    type: "linear",
    zeroline: false,
    zerolinecolor: "#000",
    zerolinewidth: 1
  }
};
Plotly.plot(myDiv, data, layout);
