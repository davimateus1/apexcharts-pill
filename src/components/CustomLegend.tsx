import { Box, Text } from "@chakra-ui/react";
import * as ReactDOMServer from "react-dom/server";
import { CustomLegend } from "../types";

export const customLegend = (data: CustomLegend) => {
  const legend = (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <Box
        style={{
          width: "1.5rem",
          height: "1.5rem",
          background: data.color,
          borderRadius: "50%",
        }}
      ></Box>
      <Text
        style={{
          fontSize: "0.8rem",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        {data.name}
      </Text>
    </Box>
  );

  return ReactDOMServer.renderToStaticMarkup(legend);
};
