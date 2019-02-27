import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import withInfo from "../withInfo";
import AddressBar from "../Components/AddressBar";

const stories = storiesOf("AddressBar", module).addDecorator(withInfo());

stories.add("Basic AddressBar", () => (
  <AddressBar
    value={text("Value", "")}
    onBlur={action("blur")}
    onChange={action("change")}
    name={text("Value", "Address")}
    placeholder={text("Value", "ADDRESS")}
  />
));
