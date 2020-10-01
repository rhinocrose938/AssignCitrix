This project used the database file given in the assignment. 
The Timeline Component recieves data from the database. 
In the Timeline component we create two objects categoryData and timebasedData.
const categoryData = data.defaultReport.aggregated.items; which is an array of 4 objects and is passed as props to Table component which is the child of Timeline component
const timebasedData = data.defaultReport.items; which is an array of 30 objects is passed as props to the NewChart component. The NewChart component also recieves the categoryData as props. 
The Table is created using the Ag-grid React Component. The categoryData is passed as rowData to the Ag-grid. The column field and headername is also extracted and passed as column data to Ag-grid. The defaultColDefs with options of sortable true, filter true, editable true and resizable true with column width are passed to the Ag-grid React component. The table can be sorted or filtered based on the availlable optoions.
The NewChart Component recieves categoryData and timebased data from the timeline component and CanvasJs chart library  is used for this component. After processing the data the dataOption are passed as data to the chart.
The legendText displayed with different colors can be tooggled to hide or show the category making the chart dynamic.
The Bootstrap CDN is added in the index.html file to provide the layout to the components.
