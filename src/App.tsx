import { Flex, Text } from "@chakra-ui/react";
import { ColumnChart } from "./components";
import { FirstChartConfig } from "./utils";

const App = () => {
  return (
    <Flex w="100vw" h="100vh" direction="column" align="center" bg="#93C4BB">
      <Text fontSize="2.5rem" fontWeight="bold">
        Apexcharts Pill
      </Text>
      <Flex w="100%" h="100%" mt="1rem">
        <Flex w="50%">
          <ColumnChart chartConfig={FirstChartConfig} />
        </Flex>
        <Flex w="50%">1</Flex>
      </Flex>
    </Flex>
  );
};

export default App;
