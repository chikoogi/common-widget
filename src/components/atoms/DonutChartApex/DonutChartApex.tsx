import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
// import * as d3 from "d3";

const DonutChartApex = ({ ratings }: any) => {
  const charRef = useRef<any>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const updatedRatings = [];
    for (let i = 0.5; i <= 5; i += 1) {
      const rangeStart = i;
      const rangeEnd = i + 0.5;
      const count = ratings.reduce((acc: any, curr: any) => {
        if (curr.rating >= rangeStart && curr.rating <= rangeEnd) {
          acc += curr.count;
        }
        return acc;
      }, 0);
      if (count > 0) {
        updatedRatings.push({ rating: `${rangeStart}~${rangeEnd}점`, count });
      }
    }

    setData({
      series: updatedRatings.map((v: any) => v.count),
      options: {
        labels: updatedRatings.map((v: any) => v.rating),
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ["#795DFF", "#9A85FF", "#B8A9FF", "#D2C9FF", "#E5E0FF"],
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["#353535"],
        },
        legend: {
          fontSize: "14px",
          fontFamily: "Pretendard",
          fontWeight: 500,
          labels: {
            colors: new Array(updatedRatings.length).fill("#fff"),
            useSeriesColors: false,
          },
          markers: {
            fillColors: ["#795DFF", "#9A85FF", "#B8A9FF", "#D2C9FF", "#E5E0FF"],
          },
        },
        // series: updatedRatings.map((v: any) => v.count),
        plotOptions: {
          pie: {
            donut: {
              size: "50px",
            },
          },
        },
      },
    });
  }, [ratings]);

  return data && <Chart ref={charRef} options={data.options} type={"donut"} series={data.series} />;
};

export default DonutChartApex;
