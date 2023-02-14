export interface DataPoint {
  w: {
    globals: {
      categoryLabels: Months;
      series: Array<Array<number>>;
      seriesNames: Array<string>;
      colors: Array<string>;
    };
  };
  dataPointIndex: number;
}

export type InfoDataPoint = {
  name: string;
  value: number;
  color: string;
};

export type Months =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";
