import StyleDictionary from "style-dictionary-utils";
import { w3cTokenJsonParser } from "style-dictionary-utils/dist/parser/w3c-token-json-parser.js";

StyleDictionary.registerParser(w3cTokenJsonParser);

const myStyleDictionary = StyleDictionary.extend({
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "time/seconds",
        "content/icon",
        "dimension/pixelToRem",
        "color/css",
      ],
      files: [
        {
          destination: "build/scss/_variables.scss"
          ,
          format: "scss/map-deep",
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();
