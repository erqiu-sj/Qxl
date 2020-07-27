import React, { useState } from "react";
import Menu from "../../Components/Insert/menu";
import Input from "../../Components/Insert/input";
import { message, Button } from "antd";
import Data from "../../Components/Insert/Data";
import { Http } from "../../network/request";
import { useHistory } from "react-router-dom";
function Insert() {
  const His = useHistory();
  // 产品名称
  const [select, setSelect] = useState(null);
  // 领货
  const [pickUp, setPickUp] = useState(null);
  // 上期结存
  const [previous, setPrevious] = useState(null);
  // 交货
  const [delivery, setDelivery] = useState(null);
  // 本期结存
  const [thisPeriod, setThisPeriod] = useState(null);
  // 退货
  const [ret, setRet] = useState(null);
  // 废品
  const [scrap, setScrap] = useState(null);
  // 单价
  const [price, setPrice] = useState(null);
  //   合计
  const [total, setTotal] = useState(null);
  // Time
  const [Time, setTime] = useState(null);
  // 备注
  const [remarks, setRemarks] = useState(null);
  return (
    <div>
      <Menu setSelect={setSelect} />
      <Input pl="领货" set={setPickUp} />
      <Input pl="上期结存" set={setPrevious} />
      <Input pl="交货" set={setDelivery} />
      <Input pl="本期结存" set={setThisPeriod} />
      <Input pl="退货" set={setRet} />
      <Input pl="废品" set={setScrap} />
      <Input pl="单价" set={setPrice} />
      <Input pl="合计" set={setTotal} />
      <Input pl="备注" set={setRemarks} />
      <br />
      <Data set={setTime} />
      <Button
        type="link"
        onClick={Get.bind(
          null,
          select,
          pickUp,
          previous,
          delivery,
          thisPeriod,
          ret,
          scrap,
          price,
          total,
          remarks,
          Time,
          His
        )}
      >
        Get
      </Button>
    </div>
  );
}
export default Insert;
async function Get(
  select,
  pickUp,
  previous,
  delivery,
  thisPeriod,
  ret,
  scrap,
  price,
  total,
  remarks,
  Time,
  His
) {
  if (Array.isArray(select) && select[0].length !== 0 && Time) {
    const result = await Http({
      url: "/Insert",
      method: "post",
      data: {
        select,
        pickUp,
        previous,
        delivery,
        thisPeriod,
        ret,
        scrap,
        price,
        total,
        remarks,
        Time,
      },
    });
    if (result.status === 200) {
      message.success("yes");
      setTimeout(() => {
        His.push("/Visualization");
      }, 1000);
    }
  } else message.warning("请核实你填入的信息");
}
