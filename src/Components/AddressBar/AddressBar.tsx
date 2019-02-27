import React from "react";
import styled from "styled-components";

const Container = styled.input`
  position: absolute;
  background-color: white;
  border-radius: 5px;
  -webkit-appearance: none;
  z-index: 2;
  width: 75%;
  border: 0;
  font-size: 16px;
  padding: 15px 10px;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  margin: auto;
  top: 10px;
  left: 0;
  right: 0;
  height: auto;
`;

interface IProps {
  /**
   * The text value of addressbar
   */
  value: string;
  /**
   * Function onBlur
   */
  onBlur: () => void;
  /**
   * Input name
   */
  name: string;
  /**
   * function onChange
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Placeholder
   * @default "TYPE ADDRESS"
   */
  placeholder?: string;
}

const AddressBar = ({ value, onBlur, onChange, name, placeholder }: IProps) => (
  <Container
    value={value}
    onBlur={onBlur}
    onSubmit={onBlur}
    onChange={onChange}
    placeholder={placeholder || "TYPE ADDRESS"}
    name={name}
  />
);

export default AddressBar;
