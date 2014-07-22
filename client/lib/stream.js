drawStream = function(data, period) {
	  for (var i=0; i < data.length; i++) {
    for (var j=0; j < data[i].values.length; j++) {
      v = data[i].values[j][0];
      var dts = v.split("-");
                    //FIX difference between hour and date
                    data[i].values[j][0] = 
                    new Date(parseInt(dts[0], 10), parseInt(dts[1], 10)-1, 
                      parseInt(dts[2], 10), parseInt(dts[3], 10), parseInt(dts[4], 10));
                  }
                }
                var n = data.length;

                l = 1000;

                var x,
                y,
                duration = 1000,
                delay = 0;

                var color = d3.scale.category20();
                var m = [60, 20, 30, 20];

                var container = $("#graph_div"),
                  width = container.width(),
                  height = 0;

                var svg = d3.select("#graph_div").append("svg:svg")
                .attr("width", '100%')
                .attr("height", '100%')
                .append("svg:g")
                .attr("class", "main")
                .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
                .attr('preserveAspectRatio','xMinYMin')
                .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");

                height = container.height();

                function get_date(d) { return d[0]; }
                function get_qtd(d) { return d[1]; }

                var line = d3.svg.line()
                .interpolate("basis")
                .x(function(d) { return x(d[0]); })
                .y(function(d) { return y(d[1]); });

                var axis = d3.svg.line()
                .interpolate("basis")
                .x(function(d) { return x(d[0]); })
                .y(height);

                var area = d3.svg.area()
                .interpolate("basis")
                .x(function(d) { return x(d[0]); })
                .y1(function(d) { return y(d[1]); });

                var memes = data;

                var g = svg.selectAll("g")
                .data(memes)
                .enter().append("svg:g")
                .attr("class", "symbol");

                svg.append("svg:g")
                .attr("class", "xaxis")
                .attr("transform", "translate(0, 0)");

                function lines() {
                  x = d3.time.scale().range([0, width]);
                  y = d3.scale.linear().range([height / n - 20, 0]);

                  x.domain([ 
                    d3.min(memes, function(d) { return d.values[0][0]; }),
                    d3.max(memes, function(d) { return d.values[d.values.length -1][0]})
                    ]);

                  transform = function(d, i) {
                   return "translate(0," + (i * height / n + 10) + ")"; 
                 }

var g = svg.selectAll(".symbol")
.attr("transform", transform);

horizons()

function horizons() {
  svg.insert("svg:defs", ".symbol")
  .append("svg:clipPath")
  .attr("id", "clip")
  .append("svg:rect")
  .attr("width", width)
  .attr("height", height / n - 20);

  var color = d3.scale.ordinal()
  .range(["#c6dbef", "#9ecae1", "#6baed6"]);

  var g = svg.selectAll(".symbol")
  .attr("clip-path", "url(#clip)");

  area.y0(height / n - 20);
            
            g.each(function(d) {
              y.domain([0, d.max]);

              d3.select(this).selectAll(".area")
              .data(d3.range(3))
              .enter().insert("svg:path", ".line")
              .attr("class", "area")
              .attr("transform", function(d) { 
                return "translate(0," + (d * (height / n - 20)) + ")"; })
              .attr("d", area(d.values))
              .style("fill", function(d, i) { return color(i); })
              .style("fill-opacity", 1e-6);

              y.domain([0, d.max / 3]);

              d3.select(this).selectAll(".line")
              .attr("d", line(d.values))
              .style("stroke-opacity", 1e-6);

              d3.select(this).selectAll(".area")
              .style("fill-opacity", null)
              .attr("d", area(d.values))
            });
            
            areas();
          }

          function areas() {
            var g = svg.selectAll(".symbol");
            axis.y(height/ n - 21);

            g.select(".line")
            .attr("d", function(d) { return axis(d.values); });

            g.each(function(d, ii) {
              y.domain([0, d.max]);

              d3.select(this).select(".line").transition()
              .duration(duration)
              .style("stroke-opacity", 1)
              .each("end", function() { 
                d3.select(this).style("stroke-opacity", null);
              });
              d3.select(this).selectAll(".area")
              .filter(function(d, i) { return i; })
              .transition()
              .duration(duration)
              .style("fill-opacity", 1e-6)
              .attr("d", area(d.values))
              .remove();

              d3.select(this).selectAll(".area")
              .filter(function(d, i) { return !i; })
              .transition()
              .duration(duration)
              .style("fill", function(d, i) { return color(ii) })
              .attr("onmouseover", 
                "evt.target.setAttribute('opacity', '0.8');")
              .attr("onmouseout", 
                "evt.target.setAttribute('opacity', '1');")
              .attr("d", area(d.values));
            });



svg.select("defs").transition()
.duration(duration)
.remove();

g.transition()
.duration(duration)
.each("end", function() { 
  d3.select(this).attr("clip-path", null);
});
setTimeout(stackedArea, duration + delay);
}
}

function stackedArea() {
  var stack = d3.layout.stack()
  .offset("wiggle")
  .values(function(d) { return d.values; })
  .x(function(d) { return d[0]; })
  .y(function(d) { return d[1]; })
  .out(function(d, y0, y) { d.y0 = y0; })
  .order("reverse");
  stack(memes);
  ma = memes[0].values.map(function(d) { 
    return d[1] + d.y0; });
  max = d3.max(ma);
  y.domain([0, max])
  .range([height, 0]);
  line
  .y(function(d) { return y(d.y0); });
  area
  .y0(function(d) { return y(d.y0); })
  .y1(function(d) { return y(d.y0 + d[1]); });

  var t = svg.selectAll(".symbol").transition()
  .duration(duration)
  .attr("transform", "translate(0,0)")
  .each("end", function() { d3.select(this).attr("transform", null); });

  t.select("path.area")
  .attr("d", function(d) { return area(d.values); });

  t.select("path.line")
  .style("stroke-opacity", function(d, i) { return i < 3 ? 1e-6 : 1; })
  .attr("d", function(d) { return line(d.values); });

        //t.select("text")
        //    .attr("transform", function(d) { 
        //        d = d.values[d.values.length - 1];
        //        return "translate(" + (w - 60) + "," 
        //            + y(d[1] / 2 + d.y0) + ")"});

svg.selectAll("path")
.on("mousemove", function(d, i) {
  $("#test").html(d.text + ' - ' + d.volume);
});



setTimeout(setAxis, duration);
}

function setAxis() {
 var vertical = d3.select("#graph_div")
 .append("div")
 .attr("class", "remove")
 .style("position", "absolute")
 .style("z-index", "19")
 .style("width", "1px")
 .style("height", "365px")
 .style("top", "10px")
 .style("background", "rgb(158, 158, 158)");

 d3.select("#graph_div")
 .on("mousemove", function(){  
   mousex = d3.mouse(this);
   mousex = mousex[0] + 15;
   vertical.style("left", mousex + "px" )})
 .on("mouseover", function(){  
   mousex = d3.mouse(this);
   mousex = mousex[0] + 5;
   vertical.style("left", mousex + "px")});

 months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 

 dates = $.map(memes[0].values, function(e, i) {
  return e[0];
});

 var is_hourly_scale = (period == 'hour') ? true : false;

 var format = d3.time.format("%d");
 if (is_hourly_scale) {
  format = d3.time.format("%H:00");
}

var xAxis = d3.svg.axis()
.scale(x)
.ticks(6)
.tickFormat(function(v) {
  return format(v);
});
ax = d3.select(document).select(".xaxis");
ax.call(xAxis);
d3.select(document).selectAll(".domain").attr("class", "line line1");

        //custom ticks for month and year
        //month just below the day, and year follows
        cur_month = -1;
        cur_year = 0;

        if (!is_hourly_scale) {
          for (var i=0; i < dates.length; i++) {
            dt = dates[i];
            m = dt.getMonth();
            year = dt.getFullYear();
            if (cur_year < year) {
              cur_year = year;
              ax.append("svg:text")
              .text(year)
              .attr("dy", 55)
              .attr("x", x(dt));
              cur_month = m;        
              ax.append("svg:text")
              .text(months[m])
              .attr("dy", 35)
              .attr("x", x(dt));
            } else if (cur_month < m) {
              cur_month = m;        
              ax.append("svg:text")
              .text(months[cur_month])
              .attr("dy", 35)
              .attr("x", x(dt));
            }
          }
        }
      }

      setTimeout(lines, duration);
}