import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        scrollbarWidth: "thin", // Firefox thin scrollbar
        scrollbarColor: "rgba(255, 166, 0, 0.8) transparent", // visible thumb with transparency
      },
      "::-webkit-scrollbar": {
        width: "0.4rem",
        height: "0.4rem",
        background: "transparent",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: "8px",
        transition: "background-color 0.3s",
      },
      "body:hover::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,0.4)", // darker on hover
      },
    }),
  },
});

export default theme;
