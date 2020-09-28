import React from 'react';
import { AgGridReact, onGridReady } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Table extends React.Component {
    
    
    render()    {


    const  requiredData = this.props.data1; // Array of four objects
    
    /*passing the data recieved from 
    Timeline component which is array of four objects to 
     to AGridReact component*/
             
    

     const columns = [ {headerName: "Category", field: "category", width: 120, sortable: true, filter: true, resizable: true}, 
                       {headerName: "High", field: "high", width: 120, sortable: true, filter: true, resizable: true}, 
                       {headerName: "Medium", field: "medium", width: 120, sortable: true, filter: true, resizable: true},
                       {headerName: "Low", field: "low", width: 120, sortable: true, filter: true, resizable: true}, 
                       {headerName: "Impact Percent", width: 120, field: "impactPercent", sortable: true, filter: true, resizable: true},
                       {headerName: "Value", field: "value", width: 120, sortable: true, filter: true, resizable: true} ]

       /*Both rowData and columns are passed to the AgGridReact component below.
       The rendered Table has options to sort, filter and are resizable*/
    return (
        <div className="ag-theme-alpine container m-3 p-3" style={{height: 300, width: 760}}>
            <h4 style={{color: 'white'}}>Risk Category Summary</h4>
            <AgGridReact  onGridReady={onGridReady}   rowData={requiredData} columnDefs ={columns}/>
        </div>
    );
  }
}

export default Table;