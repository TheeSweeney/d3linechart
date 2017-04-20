var data = [
  {key: "Jelly", value: 60, date: "2014/01/01" },
  {key: "Jelly", value: 58, date: "2014/01/02" },
  {key: "Jelly", value: 59, date: "2014/01/03" },
  {key: "Jelly", value: 56, date: "2014/01/04" },
  {key: "Jelly", value: 57, date: "2014/01/05" },
  {key: "Jelly", value: 55, date: "2014/01/06" },
  {key: "Jelly", value: 56, date: "2014/01/07" },
  {key: "Jelly", value: 52, date: "2014/01/08" },
  {key: "Jelly", value: 54, date: "2014/01/09" },
  {key: "Jelly", value: 57, date: "2014/01/10" },
  {key: "Jelly", value: 56, date: "2014/01/11" },
  {key: "Jelly", value: 59, date: "2014/01/12" },
  {key: "Jelly", value: 56, date: "2014/01/13" },
  {key: "Jelly", value: 52, date: "2014/01/14" },
  {key: "Jelly", value: 48, date: "2014/01/15" },
  {key: "Jelly", value: 47, date: "2014/01/16" },
  {key: "Jelly", value: 48, date: "2014/01/17" },
  {key: "Jelly", value: 45, date: "2014/01/18" },
  {key: "Jelly", value: 43, date: "2014/01/19" },
  {key: "Jelly", value: 41, date: "2014/01/20" },
  {key: "Jelly", value: 37, date: "2014/01/21" },
  {key: "Jelly", value: 36, date: "2014/01/22" },
  {key: "Jelly", value: 39, date: "2014/01/23" },
  {key: "Jelly", value: 41, date: "2014/01/24" },
  {key: "Jelly", value: 42, date: "2014/01/25" },
  {key: "Jelly", value: 40, date: "2014/01/26" },
  {key: "Jelly", value: 43, date: "2014/01/27" },
  {key: "Jelly", value: 41, date: "2014/01/28" },
  {key: "Jelly", value: 39, date: "2014/01/29" },
  {key: "Jelly", value: 40, date: "2014/01/30" },
  {key: "Jelly", value: 39, date: "2014/01/31" }
];
var data2 = [
{key: "Jelly", value: 60, date: "2014/01/01" },
  {key: "Jelly", value: 28, date: "2014/01/02" },
  {key: "Jelly", value: 29, date: "2014/01/03" },
  {key: "Jelly", value: 26, date: "2014/01/04" },
  {key: "Jelly", value: 27, date: "2014/01/05" },
  {key: "Jelly", value: 22, date: "2014/01/06" },
  {key: "Jelly", value: 26, date: "2014/01/07" },
  {key: "Jelly", value: 22, date: "2014/01/08" },
  {key: "Jelly", value: 24, date: "2014/01/09" },
  {key: "Jelly", value: 27, date: "2014/01/10" },
  {key: "Jelly", value: 26, date: "2014/01/11" },
  {key: "Jelly", value: 29, date: "2014/01/12" },
  {key: "Jelly", value: 26, date: "2014/01/13" },
  {key: "Jelly", value: 22, date: "2014/01/14" },
  {key: "Jelly", value: 18, date: "2014/01/15" },
  {key: "Jelly", value: 17, date: "2014/01/16" },
  {key: "Jelly", value: 18, date: "2014/01/17" },
  {key: "Jelly", value: 15, date: "2014/01/18" },
  {key: "Jelly", value: 13, date: "2014/01/19" },
  {key: "Jelly", value: 11, date: "2014/01/20" },
  {key: "Jelly", value: 47, date: "2014/01/21" },
  {key: "Jelly", value: 46, date: "2014/01/22" },
  {key: "Jelly", value: 49, date: "2014/01/23" },
  {key: "Jelly", value: 41, date: "2014/01/24" },
  {key: "Jelly", value: 42, date: "2014/01/25" },
  {key: "Jelly", value: 50, date: "2014/01/26" },
  {key: "Jelly", value: 53, date: "2014/01/27" },
  {key: "Jelly", value: 51, date: "2014/01/28" },
  {key: "Jelly", value: 59, date: "2014/01/29" },
  {key: "Jelly", value: 50, date: "2014/01/30" },
  {key: "Jelly", value: 59, date: "2014/01/31" }
]
var w = 800;
var h = 450;
var margin = {
  top: 58,
  bottom: 100,
  left: 80,
  right: 40
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
      .attr("id", "chart")
      .attr("width", w)
      .attr("height", h);
var chart = svg.append("g")
      .classed("display", true)
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var dateParser = d3.time.format('%Y/%m/%d').parse;
var x = d3.time.scale()
          .domain(d3.extent(data, function(d){
            var date = dateParser(d.date)
            return date;
          }))
          .range([0, width]);
var y = d3.scale.linear()
          .domain([0, d3.max(data, function(d){
            return d.value;
          })])
          .range([height, 0])
var xAxis = d3.svg.axis()
              .scale(x)
              .orient('bottom')
              .ticks(d3.time.days, 7)
              .tickFormat(d3.time.format('%m/%d'))
var yAxis = d3.svg.axis()
              .scale(y)
              .orient('left')
              .ticks(5)
var line = d3.svg.line()
            .x(function(d){
              var date = dateParser(d.date)
              return x(date)
            })
            .y(function(d){
              return y(d.value)
            })

function plot(params){
  this.append('g')
      .classed('x axis', true)
      .attr('transform', 'translate(0,'+ height +')')
      .call(params.axis.x)
  this.append('g')
      .classed('y axis', true)
      .attr('transform', 'translate(0,0)')
      .call(params.axis.y)

  //enter()
  this.selectAll('.trendline')
      .data([params.data.d1])
      .enter()
        .append('path')
        .classed('trendline', true)
  this.selectAll('.point')
      .data(params.data.d1)
      .enter()
        .append('circle')
        .classed('point', true)
        .attr('r', 2);
  this.selectAll('.trendline2')
      .data([params.data.d2])
      .enter()
        .append('path')
        .classed('trendline2', true)
  this.selectAll('.point2')
      .data(params.data.d2)
      .enter()
        .append('circle')
        .classed('point2', true)
        .attr('r', 2);
  //update
  this.selectAll('.trendline')
      .attr('d', function(d){
        return line(d);
      })
  this.selectAll('.point')
      .attr('cx', function(d){
        var date = dateParser(d.date);
        return x(date);
      })
      .attr('cy', function(d){
        return y(d.value)
      })
  this.selectAll('.trendline2')
      .attr('d', function(d){
        return line(d);
      })
  this.selectAll('.point2')
      .attr('cx', function(d){
        var date = dateParser(d.date);
        return x(date);
      })
      .attr('cy', function(d){
        return y(d.value)
      })
  //exit()
  this.selectAll('.trendline')
      .data([params.data.d1])
      .exit()
      .remove()
  this.selectAll('.point')
      .data(params.data.d1)
      .exit()
      .remove();
  this.selectAll('.trendline2')
      .data([params.data.d2])
      .exit()
      .remove()
  this.selectAll('.point')
      .data(params.data.d2)
      .exit()
      .remove();
}

plot.call(chart, {
  data: {
    d1: data,
    d2: data2
  },
  axis: {
    x: xAxis,
    y: yAxis
  }
});



