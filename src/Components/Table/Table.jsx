import React from "react";
import { Table, notification } from "antd";
import { Http } from "../../network/request";
const openNotification = (Name, D) => {
  //查看备注 或者修改备注
  console.log(Name);
  console.log(D);
  notification.open({
    message: "备注",
    description: "<h1>???</h1>",
  });
};
const columns = [
  {
    title: "产品名称",
    dataIndex: "name",
    render: (text) => (
      <p
        onClick={(e) => {
          const Name = e.target.innerHTML;
          const D = e.target.parentNode.parentNode.children[9].innerHTML;
          openNotification(Name, D);
        }}
        style={{ color: "skyblue", cursor: "pointer" }}
      >
        {text}
      </p>
    ),
    width: 100,
  },
  {
    title: "领货",
    dataIndex: "pickUp",
    ellipsis: true,
  },
  {
    title: "上期结存",
    dataIndex: "previous",
    ellipsis: true,
  },
  {
    title: "交货",
    dataIndex: "delivery",
    ellipsis: true,
  },
  {
    title: "本期结存",
    dataIndex: "thisPeriod",
    ellipsis: true,
  },
  {
    title: "退货",
    dataIndex: "ret",
    ellipsis: true,
  },
  {
    title: "废品",
    dataIndex: "scrap",
    ellipsis: true,
  },
  {
    title: "单价",
    dataIndex: "price",
    width: 70,
    ellipsis: true,
  },
  {
    title: "合计",
    dataIndex: "total",
    width: 100,
    ellipsis: true,
  },
  {
    title: "时间",
    dataIndex: "Time",
    ellipsis: true,
  },
];
let data = [
  // {
  //   key: "1",
  //   name: "Jim Green",
  //   pickUp: 42,
  //   previous: "London No. 2 Lake Park, London No. 2 Lake Park",
  //   delivery: "loser",
  //   thisPeriod: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   ret: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   scrap: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   price: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   total: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   Time: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  //   remarks: "New York No. 1 Lake Park, New York No. 1 Lake Park",
  // },
];
(async () => {
  const result = await Http({
    url: "/Show",
    params: {
      Time: new Date().getMonth() + 1,
      Type: "TABLE",
    },
  });
  result.data.forEach((item, index) => {
    item.id = index + 1;
    data.push(JSON.parse(JSON.stringify(item).replace(/id/g, "key")));
  });
})();
function Tables() {
  return data.length !== 0 && <Table columns={columns} dataSource={data} />;
}
export default Tables;
