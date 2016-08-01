myDiv = document.getElementById('tester')
var x0 = [];
var x1 = [];
for (var i = 0; i < 500; i++) {
	x0[i] = Math.random();
	x1[i] = Math.random() + 1;
}

var trace1 = {
  y: x0,
  histnorm: 'count',
  name: 'control',
  // autobinx: false,
  // xbins: {
  //   start: -3.2,
  //   end: 2.8,
  //   size: 0.2
  // },
  marker: {
    color: 'fuchsia',
    line: {
      color: 'grey',
      width: 0
    },
    opacity: 0.75
  },
  type: 'histogram'
};
var trace2 = {
  y: x1,
  name: 'experimental',
  // autobinx: false,
  // xbins: {
  //   start: -1.8,
  //   end: 4.2,
  //   size: 0.2
  // },
  marker: {color: 'rgb(255, 217, 102)'},
  opacity: 0.75,
  type: 'histogram'
};
var data = [trace1, trace2];
var layout = {
  title: 'Sampled Results',
  xaxis: {title: 'Value'},
  yaxis: {title: 'Count'},
  // barmode: 'group',
  // bargap: 0.25,
  // bargroupgap: 0.3
};

// var trace1 = {
//   x: [1,2,2,4,3,4],
//   y: ['SEQUENCE1', 'SEQUENCE2', 'SEQUENCE3', 'SEQUENCE4', 'SEQUENCE5', 'SEQUENCE6', 'SEQUENCE7','SEQUENCE8'],
//   name: 'HSP1',
//   orientation: 'h',
//   marker: {
//     color: 'rgb(55,55,55)',
// 		// color: [0,3,4,5,7,8],
//     width: 1
//   },
//   type: 'bar'
// };
//
// var trace2 = {
//   x: [1,9,5,1,2,4],
//   y: ['SEQUENCE1', 'SEQUENCE2', 'SEQUENCE3', 'SEQUENCE4', 'SEQUENCE5', 'SEQUENCE6', 'SEQUENCE7','SEQUENCE8'],
//   name: 'HSP2',
//   orientation: 'h',
//   type: 'bar',
//   marker: {
//     color: 'rgb(5,5,5)',
// 		// color: [11,12,14,15,16,18],
//     width: 1
//   }
// };
//
// var trace3 = {
// 	x: [5,2,9,1,3,6],
// 	y: ['SEQUENCE1', 'SEQUENCE2', 'SEQUENCE3', 'SEQUENCE4', 'SEQUENCE5', 'SEQUENCE6', 'SEQUENCE7','SEQUENCE8'],
// 	name: 'HSP3',
// 	orientation: 'h',
// 	type: 'bar',
// 	marker: {
// 		color: 'rgb(102, 102, 102)',
// 		// color: [20,22,26,28,29,33,34,38],
// 		width: 1
// 	}
// };
//
// var data = [trace1, trace2, trace3];

var layout = {
  title: 'Length Visualisation',
	yaxis: {title: 'Number of Sequences'},
	xaxis: {title: 'Sequence Length'},
  // barmode: 'stack',
	// bargap: 0
};
var len = [];
var it = [];
for (var i = 0; i < 800; i++) {
	len[i] = Math.random() * 500;
}
for (var i = 0; i < 50; i++) {
	it[i] = Math.random() * 100;
}

var data = [
	{
		// x: len,
		// y: [1,2,3,4,5,6,7,8,9,0,11,12,13,14,15,16,17,18,19,20],
		// y: it,
		x: [123, 125, 127, 130, 135, 136, 213, 231, 245, 276, 286, 295, 331, 321, 453, 456, 457, 487, 489, 490, 495, 500, 509,
				521, 532, 546, 567, 582, 592, 608, 623, 629, 631, 643, 651, 661, 2230, 2509, 2525, 2767],
		y: [3, 4, 7, 9, 11, 12, 15, 18, 21, 22, 27, 29, 31, 33, 35, 38, 41, 42, 45, 19, 25, 27, 31, 18, 30, 32, 8, 10,
				15, 18, 20, 25, 19, 2, 3, 6, 9, 10, 14, 2],
		type: 'bar',
		barmode: 'group',
		bargap: 0
		// orientation: 'h'
	}
]
Plotly.newPlot(myDiv, data, layout);
