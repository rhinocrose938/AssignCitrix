import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {	

    constructor(props) {
      super();
      
      
    }
    
   
    
  /* This Chart component recieves data2 in the props from parent Timeline component
  which is an object containing 5 arrays.
  The first four arrays of the object are used to give the co-ordinate value of Y-axis
  corresponding to their category for making the options.
  The last array is used to give date label to the chart.
  At Last the options are passed as props to the CanvasJSChart component
  On clicking any legendText that series is hidden from the chart and on clicking back again
  the series is visible in the chart.
  */
  
  render() {
      
      
      const requiredData = this.props.data2
      const options = {
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
        data: [
          {
          type: "stackedColumn",
          color: "#7f9fff",
          legendText: "Category 1",
          showInLegend: "true",
          
          dataPoints: [ 
            ...requiredData.cat1.map( (elem, i) => ({label: requiredData.datearr[i], y: elem}))
          ]
        },  
        {
          type: "stackedColumn",
          color: "#688795",
          legendText: "Category 2",
          showInLegend: "true",
          dataPoints: [ 
            ...requiredData.cat2.map( (elem, i) => ({label: requiredData.datearr[i], y: elem}))
             ]
        },
        {
          type: "stackedColumn",
          color: "#6828ff",
          legendText: "Category 3",
          showInLegend: "true",
          dataPoints: [ 
            ...requiredData.cat3.map( (elem, i) => ({label: requiredData.datearr[i], y: elem}))
             ]
        },
        {
          type: "stackedColumn",
          color: "#68ab95",
          legendText: "Category 4",
          showInLegend: "true",
          dataPoints: [ 
            ...requiredData.cat4.map( (elem, i) => ({label: requiredData.datearr[i], y: elem})) 
             ]
        }
        ]
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

  export default Chart;