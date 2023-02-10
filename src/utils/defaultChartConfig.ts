export const defaultChartConfig: ApexCharts.ApexOptions = {
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
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
};

export const series = [
  {
    name: "sales",
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  },
  {
    name: "purchases",
    data: [15, 10, 10, 15, 45, 32, 26, 43, 65, 80, 90, 100],
  },
];
