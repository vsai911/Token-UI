jQuery(document).ready(function () {
  
  var width = 500,
    height = 100;

  var svg = d3.select('#flex-title').append('svg')
    .attr('width', '110%')
    .attr('height', '100%')
    .attr('viewBox','0 0 '+(width+100)+' '+(height+100))
    .append("g")
    .attr("transform", "translate(0," + (height / 2) + ")");

  // var data = 'Welcome to Shell Shock Developers'.split(' ');
  var data = 'WelcometoTokenWhiteGuyDevelopers'.split('');

  console.log('data is: ', data);

  var step = 0,
  dataToPlot = [];
 
  var textAdd = setInterval(
    function() {
      // stop once all data is plotted
      if (step >= data.length) {
        clearInterval(textAdd);
        return;
      }

      dataToPlot.push(data[step]);
      console.log('step is: ', step);
      console.log('dataToPlot: ', dataToPlot)
      update();
      step++;
  }
  ,500);

  function update() {
    var t = d3.transition()
        .duration(750);

    // JOIN new data with old elements.
    var text = svg.selectAll("text")
      .data(dataToPlot);

    // ENTER new elements present in new data.
    text.enter().append("text")
        .attr("dy", ".35em")
        .attr("y", -60)
        .attr("x", function(d, i) { return i * 24; })
        .style("fill-opacity", 1e-6)
        .style('fill', 'white')
        .style('text-shadow', '2px 2px black')
        .style('font-size', '20px')
        .text(function(d) {console.log('d is :', d); return d; })
        .transition(t)
        .attr("y", 0)
        .style("fill-opacity", 1);
  }

});