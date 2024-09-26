import { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";
import { GENRE_ID_NAME } from "@src/variables/common-variable.ts";

const BarChartApex = ({ genreFrequency }: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData({
      series: [
        {
          name: "장르",
          data: genreFrequency.map((v: any) => v.count),
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        fill: {
          colors: ["#795DFF", "#9A85FF", "#B8A9FF", "#D2C9FF", "#E5E0FF"],
          opacity: 1,
        },
        plotOptions: {
          bar: {
            columnWidth: "50%",
            barHeight: "100%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
          labels: {
            colors: new Array(genreFrequency.length).fill("#fff"),
          },
        },
        xaxis: {
          categories: genreFrequency.map((v: any) => GENRE_ID_NAME[v.genre]),
          labels: {
            style: {
              colors: new Array(genreFrequency.length).fill("#fff"),
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
      },
    });
  }, [genreFrequency]);

  return data && <Chart options={data.options} type={"bar"} series={data.series}></Chart>;
};

export default BarChartApex;
