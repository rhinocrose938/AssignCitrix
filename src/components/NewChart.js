import React from "react";
import moment from "moment";
import CanvasJSReact from "../canvasjs.react";
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const categoryColors = ["#0B5345", "#76448A", "#1ABC9C", "#1F618D"];

class NewChart extends React.Component {
  onItemClick = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  };

  getChartData = () => {
    const categoriesData = this.props.categoryData;
    const data = this.props.chartData;
    const categories = categoriesData.map(
      (categoryData) => categoryData.category
    );
    const categoryIntialData = categories.reduce((accumulor, category) => {
      accumulor[category] = [];
      return accumulor;
    }, {});
    console.log(categoryIntialData);
    const categoryDataPoints = data.reduce((categoryAccumulator, timeData) => {
      categories.forEach((category) =>
        categoryAccumulator[category].push({
          y: timeData[category],
          label: moment(new Date(timeData.dateTime)).format("MMM/D"),
        })
      );
      return categoryAccumulator;
    }, categoryIntialData);
    console.log(categoryDataPoints);
    const dataOption = categories.map((category, index) => {
      return {
        type: "stackedColumn",
        color: categoryColors[index],
        legendText: category,
        showInLegend: "True",
        dataPoints: categoryDataPoints[category],
      };
    });
    console.log(dataOption);

    const options = {
      title: {
        text: "Timeline Details",
        fontColor: "#008B8B",
        fontFamily: "tahoma",
        fontSize: 25,
        fontWeight: "normal",
        wrap: false,
        maxWidth: 250,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.onItemClick,
      },
      axisX: {
        title: "Date of Occurences",
        titleFontFamily: "tahoma",
        titleFontColor: "#008B8B",
      },
      axisY: {
        titleFontFamily: "tahoma",
        titleFontColor: "#008B8B",
        title: "No. of Occurences",
        yValueFormatString: "#,###k",
        gridColor: "LightGray",
      },
      height: 260,
      width: 720,
      data: dataOption,
    };
    return options;
  };

  render() {
    const chartData = this.getChartData();
    return (
      <div className="container">
        <CanvasJSChart
          options={chartData}
          onRef={(ref) => (this.chart = ref)}
        />
      </div>
    );
  }
}
export default NewChart;
