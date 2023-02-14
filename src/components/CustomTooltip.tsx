import { Box, Divider, Text } from "@chakra-ui/react";
import * as ReactDOMServer from "react-dom/server";
import { DataPoint, InfoDataPoint } from "../types";

import { months } from "../utils";

export const customTooltip = (data: DataPoint): string => {
  const { w, dataPointIndex } = data;

  const currentLabel = w.globals.categoryLabels[dataPointIndex];

  const infosDataPoint: InfoDataPoint[] = w.globals.series.map(
    (serie: number[], index: number) => {
      const currentSerieName = w.globals.seriesNames[index];
      const currentColor = w.globals.colors[index];

      return {
        name: currentSerieName,
        value: serie[dataPointIndex],
        color: currentColor,
      };
    }
  );

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
          fontSize: "1rem",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#93C4BB",
        }}
      >
        {months[currentLabel as keyof typeof months]}
      </Text>
      {infosDataPoint.map((item: InfoDataPoint, index: number) => {
        return (
          <Box key={index}>
            <Text
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "5px",
                textTransform: "capitalize",
                color: item.color,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "5px",
                textTransform: "capitalize",
                color: item.color,
              }}
            >
              {item.value}
            </Text>
            {index !== infosDataPoint.length - 1 && (
              <Divider
                style={{
                  margin: "1rem 0",
                }}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );

  return ReactDOMServer.renderToStaticMarkup(tooltip);
};
