import React from "react";
import { Select } from "antd";
const { Option } = Select;

const product = [
  "大内齿",
  "二型大内齿",
  "加长大内齿",
  "八代电动车",
  "六代二轴",
  "六代一轴",
  "六代4号",
  "六代1号",
  "精品小双联",
];
function Menu(props) {
  const { setSelect } = props;
  return (
    <div>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="产品名称"
        onChange={(val) => {
          if (val.length > 1) return setSelect(val.slice(0, 1));
          setSelect(val);
        }}
        optionLabelProp="label"
        maxTagCount={1}
      >
        {product.map((item, index) => {
          return (
            <Option key={index} value={item}>
              <div className="demo-option-label-item">{item}</div>
            </Option>
          );
        })}
      </Select>
    </div>
  );
}
export default Menu;
