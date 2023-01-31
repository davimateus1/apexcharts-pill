import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "sales",
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
];

export const ColumnChart = ({
  width = 900,
  height = 400,
  chartConfig = {},
  ...rest
}): JSX.Element => {
  const options = {
    ...chartConfig 
  };

  return (
    <Flex w="100%" h="100%">
      <ReactApexChart
        options={options}
        series={series as ApexAxisChartSeries | ApexNonAxisChartSeries}
        type="bar"
        height={height}
        width={width}
        {...rest}
      />
    </Flex>
  );
};
