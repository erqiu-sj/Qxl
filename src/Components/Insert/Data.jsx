import { DatePicker } from "antd";
import React from "react";

function Data(props) {
  const { set } = props;
  return (
    <DatePicker
      onChange={(date, dateString) => {
        set(dateString);
      }}
    />
  );
}
export default Data;
