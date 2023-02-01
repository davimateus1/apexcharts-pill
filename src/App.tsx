import { Flex, Text } from "@chakra-ui/react";
import { ColumnChart } from "./components";
import { FirstChartConfig, series } from "./utils";

const App = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column" align="center" bg="#93C4BB">
      <Text fontSize="2.5rem" fontWeight="bold">
        Apexcharts Pill
      </Text>
      <Flex w="100%" h="100%" mt="2.5rem">
        <Flex w="50%" direction="column">
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
            Default Chart
          </Text>
          <ColumnChart chartConfig={FirstChartConfig} series={series} />
        </Flex>
        <Flex w="50%" direction="column">
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
            Custom Chart
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
