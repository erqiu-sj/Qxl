import { init } from "echarts";
import React, { useLayoutEffect } from "react";
function Polyline() {
  useLayoutEffect(() => {
    const myEcharts = init(document.querySelector("#one"));
    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "邮件营销",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
        },
        {
          name: "联盟广告",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
        },
        {
          name: "视频广告",
          type: "line",
          smooth: true,
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "直接访问",
          type: "line",
          data: [320, 332, 301, 334, 390, 330, 320],
          smooth: true,
        },
        {
          name: "搜索引擎",
          type: "line",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          smooth: true,
        },
      ],
    };
    window.addEventListener("resize", () => {
      myEcharts.resize();
    });
    myEcharts.setOption(option);
  }, []);
  return <div id="one" style={{ height: 500, width: 500 }}></div>;
}
export default Polyline;
