import React from 'react';
import moment from "moment";
import CanvasJSReact from '../canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class NewChart extends React.Component {	
    
  
  render() {
    
      
      const requiredData = this.props.data3;
      const coordinate1 = requiredData.map(e => ({y: e.category1, label: moment(new Date(e.dateTime)).format('MMM/D')}));
      const coordinate2 = requiredData.map(e => ({y: e.category2, label: moment(new Date(e.dateTime)).format('MMM/D')}));
      const coordinate3 = requiredData.map(e => ({y: e.category3, label: moment(new Date(e.dateTime)).format('MMM/D')}));
      const coordinate4 = requiredData.map(e => ({y: e.category4, label: moment(new Date(e.dateTime)).format('MMM/D')}));
      
      const arrayOfData = [{color: "#0B5345", category: "Category 1", datapoints: coordinate1},
      {color: "#76448A", category: "Category 2", datapoints: coordinate2}, 
      {color: "#1ABC9C", category: "Category 3", datapoints: coordinate3},
      {color: "#1F618D", category: "Category 4", datapoints: coordinate4}
      ]

      const dataOption = arrayOfData.map( element => 
        ({type: "stackedColumn", color: element.color, legendText: element.category, 
        showInLegend:"True", dataPoints: element.datapoints}));

        
      
      const  options = {

      title:{
        text: "Timeline Details",
        fontColor: "#008B8B",
        fontFamily: "tahoma",
        fontSize: 25,
        fontWeight: 'normal',
        wrap: false,
        maxWidth: 250
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
          
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render(); 
            
        } 
      },
        axisX:{
        title: "Date of Occurences",
        titleFontFamily: "tahoma",
        titleFontColor: "#008B8B"
      },
        axisY:{
        titleFontFamily: "tahoma",
        titleFontColor: "#008B8B",
        title:"No. of Occurences",
        yValueFormatString: "#,###k",
        gridColor: "LightGray"
      },
        data: dataOption
  }
    
    
      
    
      
          
     return (
        <div className="container">
          <CanvasJSChart options = {options}
              onRef = {ref => this.chart = ref}
          />
        </div>
      );
    
  }
}
  export default NewChart;