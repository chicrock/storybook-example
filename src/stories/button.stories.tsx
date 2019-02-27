import React from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import withInfo from "../withInfo";
import Button from "../Components/Button";

const stories = storiesOf("Buttons", module).addDecorator(withInfo());

stories.add("Basic Button", () => (
  <Button
    value={text("Value", "Submit")}
    onClick={action("clicked")}
    disabled={boolean("diabled", false)}
    className={text("className", "")}
  />
));
