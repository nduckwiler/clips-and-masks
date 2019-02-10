window.onload = () => {
  d3.select('svg').on('click', function (d,i,nodes) {
    console.log(this);
    console.log(d3.event.target);

    const clipPathURL = d3.event.target.getAttribute('clip-path');
    // If target has clipPath, increase its radius
    if (clipPathURL) {
      const openParenIndex = clipPathURL.indexOf('(');
      const closeParenIndex = clipPathURL.indexOf(')');
      const clipPathID = clipPathURL.substring(openParenIndex + 1, closeParenIndex);
      console.log(clipPathID);
      d3.select(clipPathID + ' circle')
          .attr('r', 200);

      // Add another rect with clipPath
      d3.select('svg')
        .append('rect')
          .attr('x', 0)
          .attr('y', 0)
          .attr('width', 200)
          .attr('height', 200)
          .attr('fill', 'blue')
          .attr('clip-path', 'url(#clip-2)');

      d3.select('defs')
        .append('clipPath')
          .attr('id', 'clip-2')
        .append('circle')
          .attr('cx', 100)
          .attr('cy', 100)
          .attr('r', 25)
    }


  });

};
