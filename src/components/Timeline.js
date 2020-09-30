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
                   <div className="container-sm mt-3">
                      <div className="row">
                        <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                           <NewChart chartData ={timebasedData} categoryData={categoryData}/>
                           </div>
                        <div className="col-sm-2"></div>
                     </div>
                     <hr/>
                      <div className="row">
                      <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                       <Table tableData = {categoryData}/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        )
    }
}

export default Timeline;
