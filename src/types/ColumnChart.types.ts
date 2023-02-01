export type ColumnChartProps = {
  width?: number;
  height?: number;
  chartConfig: ApexCharts.ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  type?: ChartTypes;
};

type ChartTypes =
  | "line"
  | "area"
  | "bar"
  | "histogram"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "treemap"
  | "boxPlot"
  | "candlestick"
  | "radar"
  | "polarArea"
  | "rangeBar";
