import React from 'react';
import { AgGridReact, onGridReady } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Table extends React.Component {

    render()  {

    const  requiredData = this.props.tableData; // Array of four objects

    /*passing the data recieved from Timeline component which is array of four objects to AGridReact component*/

     const columns = Object.keys(requiredData[0]).map( e => ({headerName: e.toUpperCase(), field: e}));

     const defaultColDef = { sortable: true, editable: true,  filter: true, resizable: true, width: 120}

       /*Both rowData and columns are passed to the AgGridReact component below.
       The rendered Table has options to sort, filter and are resizable*/
    return (
        <div className="ag-theme-alpine container m-3 p-3" style={{height: 300, width: 760}}>
            <h4 style={{color: 'white'}}>Risk Category Summary</h4>
               <AgGridReact  onGridReady={onGridReady}
                             rowData={requiredData} columnDefs={columns}
                             defaultColDef={defaultColDef}/>
          </div>
      );
  }
}

export default Table;
