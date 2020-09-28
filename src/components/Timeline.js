import React, { Component } from 'react';
import data from './Database';
import Table from './Table';
import NewChart from './NewChart';


class Timeline extends Component {

    

    render() {

     const categoryData = data.defaultReport.aggregated.items; 
     // array of 4 objects passed as props to Table component
     
     const timebasedData = data.defaultReport.items; 
     // array of 30 objects

     
        return (
            <div className="container m-4 ">
               <div className="row m-5">
                 <div className="col-sm-3"></div>
                  <div className="col-sm-7">
                    <div className="card">
                       <div className="card-body">
                       <NewChart data3 ={timebasedData}/>
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
