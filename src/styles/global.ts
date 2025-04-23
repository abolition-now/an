import { globalCss } from "@stitches/react";

export const rem = 20;
export const headerHeight = 60.533333;

const defaults = {
  body: {
    margin: 0,
    padding: 0,
  },

  html: {
    fontFamily: "$sans",
    fontSize: `${rem}px`,
    fontWeight: "500",
    fontSmooth: "always",
    webKitFontSmothing: "antialiased",
    mozOsxFontSmoth: "grayscale",
    paddingTop: `${headerHeight}px`,
  },

  "ul, ol": {
    li: {
      paddingBottom: "$gr1",
    },
  },

  dl: {
    dt: {
      fontWeight: "400",
    },
    dd: {
      marginInlineStart: "0",
      paddingBottom: "$gr4",
      lineHeight: "1.47em",
    },
  },

  ".clover-viewer-header": {
    display: "none !important",
  },

  ".clover-viewer-painting": {
    height: "600px !important",
    maxHeight: "100vh !important",
  },

  "#clover-iiif-video": {
    height: "600px !important",
    maxHeight: "100vh !important",
  },

  ".an-work-metadata": {
    "[data-label=identifier]": {
      display: "none",
    },
    "[data-label=collection]": {
      display: "none",
    },
    "[data-label=mediatype]": {
      display: "none",
    },
    "[data-label=title]": {
      display: "none",
    },
    "[data-label=addeddate]": {
      display: "none",
    },
  },
};

const globalStyles = globalCss({
  ...defaults,
});

export default globalStyles;
