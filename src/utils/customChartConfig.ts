import { customTooltip } from "../components";

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
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    tickPlacement: "on",
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
      width: 15,
      height: 15,
      radius: 20,
    },
    itemMargin: {
      horizontal: 8,
    },
  },
};
