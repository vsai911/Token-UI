jQuery(document).ready(function () {
  
  // var width = 500,
  //   height = 100;

  // var svg = d3.select('#flex-title').append('svg')
  //   .attr('width', '100%')
  //   .attr('height', '100%')
  //   .attr('viewBox','0 0 '+(width+100)+' '+(height+100))
  //   .append("g")
  //   .attr("transform", "translate(0," + (height / 2) + ")");

  // // var data = 'Welcome to Shell Shock Developers'.split(' ');
  // var data = 'WelcometoTokenWhiteGuyDevelopers'.split('');

  // console.log('data is: ', data);

  // var step = 0,
  // dataToPlot = [];
 
  // var textAdd = setInterval(
  //   function() {
  //     // stop once all data is plotted
  //     if (step >= data.length) {
  //       clearInterval(textAdd);
  //       return;
  //     }

  //     dataToPlot.push(data[step]);
  //     console.log('step is: ', step);
  //     console.log('dataToPlot: ', dataToPlot)
  //     update();
  //     step++;
  // }
  // ,500);

  // function update() {
  //   var t = d3.transition()
  //       .duration(750);

  //   // JOIN new data with old elements.
  //   var text = svg.selectAll("text")
  //     .data(dataToPlot);

  //   // ENTER new elements present in new data.
  //   text.enter().append("text")
  //       .attr("dy", ".35em")
  //       .attr("y", -60)
  //       .attr("x", function(d, i) { return i * 24; })
  //       .style("fill-opacity", 1e-6)
  //       .style('fill', 'white')
  //       .style('text-shadow', '2px 2px black')
  //       .style('font-size', '20px')
  //       .text(function(d) {console.log('d is :', d); return d; })
  //       .transition(t)
  //       .attr("y", 0)
  //       .style("fill-opacity", 1);
  // }

  // This is the force layout method if we want that.
  var width = 500,
    height = 100;

  var svg = d3.select('#flex-title').append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox','0 0 '+(width+100)+' '+(height+100))
    .append("g")
    .attr("transform", "translate(0," + (height / 2) + ")");

  var data = {
    nodes: [
      { word: 'Welcome' },
      { word: 'to' },
      { word: 'Token' },
      { word: 'White'},
      { word: 'Guy' },
      { word: 'Developers' }
    ],
    links: [
      { source: 0, target: 1, value: 1 },
      { source: 1, target: 2, value: 1 },
      { source: 2, target: 3, value: 1 },
      { source: 3, target: 4, value: 1 },
      { source: 4, target: 5, value: 1 },
      { source: 5, target: 5, value: 1 } 
    ]
  }



  var force = d3.layout.force()
    .charge(-250)
    .linkDistance(70)
    .size([width, height])
    .nodes(data.nodes)
    .links(data.links);

  var node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  var link = svg.selectAll(".link")
      .data(data.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", '2px')
      .style('stroke', 'black')
      .style('stroke-opacity', '0')

  node.append("circle")
      .attr("r", 8)
      .style("fill", function (d) {
        return '#01394B';
      })
      .style('opacity', '0');

  node.append("text")
        .attr("dx", 10)
        .attr("dy", ".35em")
        .text(function(d) { return d.word })
        .style("stroke", "white")
        .style('text-shadow', '2px 2px black')
        .style('font-family','Hoefler Text')
        .style('font-size', '24px')
        .style("stroke-width", '2px');

  // svg.append("defs").selectAll("marker")
  //   .data(["suit", "licensing", "resolved"])
  // .enter().append("marker")
  //   .attr("id", function(d) { return d; })
  //   .attr("viewBox", "0 -5 10 10")
  //   .attr("refX", 25)
  //   .attr("refY", 0)
  //   .attr("markerWidth", 6)
  //   .attr("markerHeight", 6)
  //   .attr("orient", "auto")
  //   .append("path")
  //   .attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5")
  //   .style("stroke", "#4679BD")
  //   .style("opacity", "0.6");

    force.start();
  //Now we are giving the SVGs co-ordinates - the force layout is generating the co-ordinates which this code is using to update the attributes of the SVG elements
  force.on("tick", function () {
      link.attr("x1", function (d) {
          return d.source.x;
      })
          .attr("y1", function (d) {
          return d.source.y;
      })
          .attr("x2", function (d) {
          return d.target.x;
      })
          .attr("y2", function (d) {
          return d.target.y;
      });
      d3.selectAll("circle").attr("cx", function (d) {
          return d.x;
      })
          .attr("cy", function (d) {
          return d.y;
      });
      d3.selectAll("text").attr("x", function (d) {
          return d.x;
      })
          .attr("y", function (d) {
          return d.y;
      });
  });

});