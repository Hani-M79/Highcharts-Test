import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./index.css";

const options = {
  chart: {
    type: "bar",
    align: "center",
    backgroundColor: "transparent",
  },
  title: {
    text: "My Chart",
  },
  xAxis: {
    categories: ["Apple", "Banana", "Orange", "Strawberry", "Cucumber"],
  },
  yAxis: {
    title: "Fruit Eaten",
  },
  series: [
    {
      name: "Hani",
      data: [0, 1, 2, 10, 4],
    },
    {
      name: "unknown",
      data: [3, 2, 1, 6, 5],
    },
  ],
};

const App = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: { height: "400px", width: "100%", align: "center" },
      }}
    />
  </div>
);

render(<App />, document.getElementById("root"));
