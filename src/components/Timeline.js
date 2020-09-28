import React, { Component } from 'react';
import data from './Database';
import Chart from './Chart';
import Table from './Table';
import moment from "moment";


class Timeline extends Component {

    constructor(props) {
        super();
      this.state = {database: data, legendActive: ''} ;
    }


   

    //imported data from Database and set it equal to database in state.
    render() {

     const categoryData = this.state.database.defaultReport.aggregated.items; 
     // array of 4 objects passed as props to Table component
     
     const timebasedData = this.state.database.defaultReport.items; 
     // array of 30 objects

     const arr1 = timebasedData.map( e => e.category1); 
     // array of category1 values extracting from timebasedData
     const arr2 = timebasedData.map( e => e.category2); 
     // array of category2 values extracting from timebasedData
     const arr3 = timebasedData.map( e => e.category3); 
     // array of category3 values extracting from timebasedData
     const arr4 = timebasedData.map( e => e.category4); 
     // array of category4 values extracting from timebasedData
     const datefind = timebasedData.map( e => e.dateTime);
     const arr5 = datefind.map( e => moment(new Date(e)).format('MMM/D')); 
     // array of dateTime values  extracting from timebasedData
     const dataInUse = {cat1: arr1, cat2: arr2, cat3: arr3, cat4: arr4, datearr: arr5}; 
     // obj to be passed as props to Chart
     // Both the Chart component and the Table component are rendered below.
        return (
            <div className="container m-4 ">
               <div className="row m-5">
                 <div className="col-sm-3"></div>
                  <div className="col-sm-7">
                    <div className="card">
                       <div className="card-body">
                          <Chart   data2 = {dataInUse}/>
                      </div>
                     </div>
                  </div>
                  <div className="col-sm-2">
                  </div>
              </div>
              
                <div className="row m-5">
                  <div className="col-sm-1"></div>
                    <div className="col-sm-11"> 
                    <Table data1 = {categoryData}/>
                  </div>
                      <div className="col-sm-0"></div>
                  </div>
                  
            </div>
        )
    }
}

export default Timeline;
