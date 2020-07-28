import { init } from "echarts";
import React, { useEffect } from "react";
import { Http } from "../../network/request";

function Polyline() {
  useEffect(() => {
    (async () => {
      const result = await Http({
        url: "/Show",
        params: {
          Time: new Date().getMonth() + 1,
          Type: "ECHARTS",
        },
      });
      let Name = [];
      let Salary = [];
      result.data.forEach((item) => {
        Name.push(Object.values(item)[0]);
        Salary.push(Object.values(item)[1]);
      });
      try {
        const myEcharts = init(document.querySelector("#one"));
        const option = {
          title: {
            text: "六月",
            subtext: "数据来自账单",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["六月"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            type: "category",
            data: Name.length !== 0 && Name,
          },
          series: [
            {
              name: "六月",
              type: "bar",
              data: Salary.length !== 0 && Salary,
            },
          ],
        };
        window.addEventListener("resize", () => {
          myEcharts.resize();
        });
        myEcharts.setOption(option);
      } catch (e) {
        const myEcharts = init(document.querySelector("#one"));
        const option = {
          title: {
            text: "六月",
            subtext: "数据来自账单",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            data: ["六月"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            type: "category",
            data: Name.length !== 0 && Name,
          },
          series: [
            {
              name: "六月",
              type: "bar",
              data: Salary.length !== 0 && Salary,
            },
          ],
        };
        window.addEventListener("resize", () => {
          myEcharts.resize();
        });
        myEcharts.setOption(option);
      }
    })();
  }, []);
  return <div id="one" style={{ height: "500%", width: "60%" }}></div>;
}
export default Polyline;
