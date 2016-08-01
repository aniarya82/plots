// var data = d3.range(20).map(d3.randomBates(10));
var data = [644,126,1955,1455,3634,1069,1654,1297,2654,2177,6132,2767,923,3933,
  2910,287,396,232,1138,724,306,899,1022,616,3362,873,7910,792,2827,255,285,6154,
  500,2621,222,2297,943];

console.log("data: "+data.toString());

var formatCount = d3.format(",.0f");

var margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scaleLinear()
    .domain([d3.min(data),d3.max(data)])
    .rangeRound([0, width]);

var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))
    (data);

console.log("x domain "+x.domain());
console.log("x ticks: "+x.ticks(20));
console.log(" math test "+Math.floor(d3.min(data)/ 100));
console.log(" value fir width "+(x(bins[0].x1) - x(bins[0].x0) - 1));
console.log("bins: "+bins.toString()+" bins length "+bins[8].length);
console.log("bins test "+x(bins[1].x0)+" and "+x(bins[1].x1));
console.log("rounding off tests "+d3.format('r')(633, -2));

var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var bar = svg.selectAll(".bar")
    .data(bins)
  .enter().append("g")
    .attr("class", "bar")
    .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

bar.append("rect")
    .attr("x", 1)
    .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr("height", function(d) { return height - y(d.length); });

bar.append("text")
    .attr("dy", ".75em")
    .attr("y", 6)
    .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
    .attr("text-anchor", "middle")
    .text(function(d) { return formatCount(d.length); });

svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
