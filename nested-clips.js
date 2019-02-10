window.onload = () => {
  d3.select('svg')
      .attr('height', '200px')
      .attr('width', '300px');

  d3.select('svg').on('click', function (d,i,nodes) {
    console.group('click:');
    // console.log('Event listener attached to:');
    // console.log(this);
    console.log('Event target (what was clicked):');
    console.log(d3.event.target);
    console.log('Event target\'s parent:');
    console.log(d3.event.target.parentNode);
    console.groupEnd();
    const clickedGroup = d3.select(d3.event.target.parentNode);

    const clipPathURL = clickedGroup.attr('clip-path');
    // If target's parent has clipPath, increase its radius
    if (clipPathURL) {
      console.log(`clip path found with url ${clipPathURL}. Expanding and adding another layer...`);
      const openParenIndex = clipPathURL.indexOf('(');
      const closeParenIndex = clipPathURL.indexOf(')');
      const clipPathID = clipPathURL.substring(openParenIndex + 1, closeParenIndex);
      d3.select(clipPathID + ' circle')
          .attr('r', 250);

      // Add a nested g and rect with clipPath
      clickedGroup
        .append('g')
          .attr('clip-path', 'url(#clip-2)')
        .append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 300)
          .attr('height', 200)
          .attr('fill', 'blue')

      d3.select('defs')
        .append('clipPath')
          .attr('id', 'clip-2')
        .append('circle')
          .attr('cx', 150)
          .attr('cy', 50)
          .attr('r', 25)
    }


  });

};
