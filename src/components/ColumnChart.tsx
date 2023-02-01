import { Flex } from "@chakra-ui/react";
import ReactApexChart from "react-apexcharts";
import { ColumnChartProps } from "../types";

export const ColumnChart = ({
  width = 900,
  height = 400,
  chartConfig,
  series,
  type = "bar",
}: ColumnChartProps): JSX.Element => {
  return (
    <Flex w="100%" h="100%">
      <ReactApexChart
        options={{ ...chartConfig }}
        series={series}
        type={type}
        height={height}
        width={width}
      />
    </Flex>
  );
};
