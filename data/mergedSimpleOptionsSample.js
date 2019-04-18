import {
  title,
  dimensions,
  keyColumn,
  font,
  data,
  features
} from "./optionsObjectSample";

const mergedSimpleOptionsSample = {
  title,
  dimensions,
  keyColumn,
  font,
  data,
  features: {
    ...features,
    additionalIcons: []
  }
};

export default mergedSimpleOptionsSample;
