var instance = new circosJS({
    container: '#chart',
    width: 800,
    height: 800
});

var layout_data = [
  { "len": 31, "color": "#8dd3c7", "label": "HIT 1", "id": "hit1" },
  { "len": 28, "color": "#8dd3c7", "label": "HIT 2", "id": "hit2" },
  { "len": 31, "color": "#8dd3c7", "label": "HIT 3", "id": "hit3" },
  { "len": 30, "color": "#80b1d3", "label": "QUERY 1", "id": "query1" },
  { "len": 31, "color": "#80b1d3", "label": "QUERY 2", "id": "query2" },
  // { "len": 30, "color": "#fdb462", "label": "June", "id": "june" },
  // { "len": 31, "color": "#b3de69", "label": "July", "id": "july" },
  // { "len": 31, "color": "#fccde5", "label": "August", "id": "august" },
  // { "len": 30, "color": "#d9d9d9", "label": "September", "id": "september" },
  // { "len": 31, "color": "#bc80bd", "label": "October", "id": "october" },
  // { "len": 30, "color": "#ccebc5", "label": "November", "id": "november" },
  // { "len": 31, "color": "#ffed6f", "label": "December", "id": "december" }
];

instance.layout(
    {
        innerRadius: 300,
        outerRadius: 350,
        labels: {
            display: true,
            size: '8px',
            radialOffset: 12
        },
        ticks: {
            display: true
        }
    },
    layout_data
);

var chords_data = [
    ['hit1', 1, 12,'query2', 18, 20, 0],
    ['hit2', 20, 28,'query1', 1, 13, 2],
    ['hit2', 20, 28,'query2', 1, 13, 3],
    ['hit1', 25, 28,'hit3', 10, 13, 4],
    ['query2', 15, 18,'hit3', 20, 23, 5],
    ['query1', 18, 25,'hit2', 2, 11, 6],
];

instance.chord('chord1', {usePalette: false, color: 'rgb(76,127,115)'}, chords_data);

instance.render();
