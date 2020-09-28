import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = (props) => {
    
    const requiredData = props.data1; // Array of four objects
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState(requiredData); 
    
    
    /*passing the data recieved from 
    Timeline component which is array of four objects to 
    this component and setting the state which is rowData. 
    This rowData state is passed as props to AGridReact component*/
             
    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

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
            <AgGridReact  onGridReady={onGridReady}   rowData={rowData} columnDefs ={columns}/>
        </div>
    );
};

export default Table;