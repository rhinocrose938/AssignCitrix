import React from 'react';
import moment from "moment";
import CanvasJSReact from '../canvasjs.react';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chart extends React.Component {	

  
    
  
  render() {
    
      
      const requiredData = this.props.data2;
      
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
      data: [
        {
        type: "stackedColumn",
        color: "#0B5345",
        legendText: "Category 1",
        showInLegend: "true",
        
        dataPoints: [ 
        ...requiredData.map( (element) => 
        ({y: element.category1, label: moment(new Date(element.dateTime)).format('MMM/D')}))
        ]
      },
      {
        type: "stackedColumn",
        color: "#76448A",
        legendText: "Category 2",
        showInLegend: "true",
        
        dataPoints: [ 
          ...requiredData.map( (element) => 
          ({y: element.category2, label: moment(new Date(element.dateTime)).format('MMM/D')}))
        ]
      },
      {
        type: "stackedColumn",
        color: "#1ABC9C",
        legendText: "Category 3",
        showInLegend: "true",
        
        dataPoints: [ 
          ...requiredData.map( (element) => 
          ({y: element.category3, label: moment(new Date(element.dateTime)).format('MMM/D')}))
        ]
      },
      {
        type: "stackedColumn",
        color: "#1F618D",
        legendText: "Category 4",
        showInLegend: "true",
        
        dataPoints: [ 
          ...requiredData.map( (element) => 
          ({y: element.category4, label: moment(new Date(element.dateTime)).format('MMM/D')}))
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