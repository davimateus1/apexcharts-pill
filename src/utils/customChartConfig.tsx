import { customTooltip } from "../components";
import { customLegend } from "../components/CustomLegend";
import { chartMonths, fictionalDataLegend } from "./fictionalDataLegend";

export const customChartConfig: ApexCharts.ApexOptions = {
  colors: ["#F44336", "#2196F3"],
  chart: {
    toolbar: {
      tools: {
        download: `<img src="https://img.icons8.com/ios/50/9400D3/download.png" />`,
        zoomin: `<img src="https://img.icons8.com/ios/50/9400D3/zoom-in.png" />`,
        zoomout: `<img src="https://img.icons8.com/ios/50/9400D3/zoom-out.png" />`,
        zoom: `<img src="https://img.icons8.com/ios/50/9400D3/expand.png" />`,
        pan: `<img src="https://img.icons8.com/ios/50/9400D3/move.png" />`,
        reset: `<img src="https://img.icons8.com/ios/50/9400D3/home.png" />`,
        customIcons: [
          {
            icon: `<img src="https://img.icons8.com/ios/50/000000/expand.png" />`,
            click: (chart, options, e) => {
              alert("You clicked on custom icon");
            },
          },
        ],
      },
    },
  },
  xaxis: {
    categories: chartMonths,
    tickPlacement: "on",
  },
  title: {
    text: "Monthly Sales and Purchases",
    align: "left",
    margin: 0,
    offsetX: 15,
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      color: "#1E252B",
    },
  },
  yaxis: {
    title: {
      text: "Sales ($)",
      style: {
        fontSize: "15px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 600,
        color: "#263238",
      },
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    custom: (data) => customTooltip(data),
  },
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    offsetX: 0,
    markers: {
      width: 0,
      height: 0,
    },
    itemMargin: {
      horizontal: 8,
    },
    customLegendItems: fictionalDataLegend.map((item) => customLegend(item)),
  },
  responsive: [
    {
      breakpoint: 1680,
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        legend: {
          position: "top",
        },
        dataLabels: {
          enabled: false,
        },
        chart: {
          width: 600,
        },
      },
    },
  ],
};
