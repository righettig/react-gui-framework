import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

class Grid extends Component {
  constructor(props) {
    super(props);

    if (!props.options.fields) { // NB: default values
      props.options.fields = [
        { name: "Make",  fieldName: "make"  },
        { name: "Model", fieldName: "model" },
        { name: "Price", fieldName: "price" }
      ]
    }

    this.state = {
      columnDefs: props.options.fields.map(f => {
        return { 
          headerName: f.name, 
          field: f.fieldName
        }
      }),
      rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="view-header">
          {this.props.options.displayName}
        </div>
        <div
          className="ag-theme-balham"
          style={{
            height: 230
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default Grid;