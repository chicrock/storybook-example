import { withInfo } from "@storybook/addon-info";

const styles = {
  body: {
    table: {
      borderStyle: "solid",
      borderWidth: 2,
    },
  },
};

const withStyleInfo = (text?: string) =>
  withInfo({ inline: false, source: true, styles, text });

export default withStyleInfo;
