export const FirstChartConfig: ApexCharts.ApexOptions = {
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
};

export const series = [
  {
    name: "sales",
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
  {
    name: "purchasing",
    data: [15, 10, 10, 15, 45, 32, 26, 43, 65, 80],
  },
];