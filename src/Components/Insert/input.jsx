import React from "react";
import { Input } from "antd";
import { isNumber } from "lverifica";
const Options = [
  "领货",
  "上期结存",
  "交货",
  "本期结存",
  "退货",
  "废品",
  "单价",
  "合计",
];
function Inputs(props) {
  const { pl, maxLength, set } = props;
  return (
    <div>
      <Input
        style={{ marginTop: 10 }}
        placeholder={pl}
        allowClear
        maxLength={maxLength || 30}
        onChange={(e) => {
          if (Options.includes(pl)) {
            if (!isNumber(e.target.value)) {
              import("antd").then((val) =>
                val.message.warning("此处只能填写数字")
              );
            } else set(e.target.value);
          } else set(e.target.value);
        }}
      />
    </div>
  );
}
export default Inputs;
