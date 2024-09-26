import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BarChartD3 = () => {
  const [data, setData] = useState({
    Switzerland: 7.3,
    Sweden: 6.37,
    Norway: 6.09,
    "United States": 5.66,
    Israel: 5.35,
    Canada: 5.29,
  });

  const svgRef = useRef<HTMLDivElement | null>(null);
  function chartRender(svg: any) {
    const width = 500;
    const height = 400;
    const leftMargin = 30;
    const rightMargin = 20;
    const bottomMargin = 30;
    const topMargin = 30;

    svg.selectAll("circle").data(data);

    svg
      .attr("width", width + leftMargin + rightMargin)
      .attr("height", height + topMargin + bottomMargin);

    const xscale = d3.scaleBand().domain(Object.keys(data)).range([0, width]);
    const x_axis = d3.axisBottom(xscale);

    svg
      .append("g")
      .attr("transform", `translate(${leftMargin},   ${topMargin + height})`)
      .call(x_axis);
    // Y scale and axis
    const yscale = d3
      .scaleLinear()
      .domain([0, Math.max(...Object.values(data))])
      .range([height, 0]);
    const y_axis = d3.axisLeft(yscale);

    svg.append("g").attr("transform", `translate(${leftMargin}, ${topMargin})`).call(y_axis);
    Object.values(data).forEach((element, index) => {
      const g = svg.append("g");
      const barWidth = 40;
      const x =
        index * (width / Object.values(data).length) +
        width / Object.values(data).length / 2 -
        barWidth / 2;
      g.append("rect")
        .attr("x", x)
        .attr("y", yscale(element))
        .attr("height", height - yscale(element))
        .attr("width", barWidth)
        .attr("fill", "#88aaee")
        .attr("transform", `translate(${leftMargin}, ${topMargin})`);
      g.append("text")
        .attr("x", x)
        .attr("y", yscale(element))
        .text(element)
        .attr("transform", `translate(${leftMargin}, ${topMargin})`);
    });
  }

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current).append("svg");
      chartRender(svg);

      return () => {
        svg.remove();
      };
    }
  }, [data]);

  return <div ref={svgRef}></div>;
};

export default BarChartD3;
