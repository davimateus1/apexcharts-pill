import { Box, Text } from "@chakra-ui/react";
import * as ReactDOMServer from "react-dom/server";

export const customTooltip = (data: any): string => {
  const { w, dataPointIndex } = data;

  const currentLabel = w.globals.categoryLabels[dataPointIndex];

  const infosDataPoint = w.globals.series.map((serie: any, index: number) => {
    const currentSerieName = w.globals.seriesNames[index];
    return {
      name: currentSerieName,
      value: serie[dataPointIndex],
    };
  });

  const tooltip = (
    <Box
      style={{
        background: "white",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Text
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Month: {currentLabel}
      </Text>
      {infosDataPoint.map((item: any) => {
        return (
          <Box>
            <Text
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "5px",
                textTransform: "capitalize",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "5px",
                textTransform: "capitalize",
              }}
            >
              {item.value}
            </Text>
          </Box>
        );
      })}
    </Box>
  );

  return ReactDOMServer.renderToStaticMarkup(tooltip);
};
