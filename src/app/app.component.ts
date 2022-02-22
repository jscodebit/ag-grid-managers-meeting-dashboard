import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import RefData from './shared/refData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public columnDefs: (ColDef | ColGroupDef)[] = [
    // using default ColDef
    { headerName: 'Title',field: 'title' },
    { headerName: 'Division',field: 'division' },
    { headerName: 'Project Owner',field: 'project_owner' },
    // using number column type
    { headerName: 'Budget',field: 'budget', type: 'numberColumn' },
    // { headerName: '',field: 'year', type: 'numberColumn' },
    { headerName: 'Status',field: 'status' },
    // using date and non-editable column types
    { headerName: 'Created Date',field: 'created', type: ['dateColumn', 'nonEditableColumn'], width: 220 },
    { headerName: 'Modified Date',field: 'modified', type: ['dateColumn', 'nonEditableColumn'], width: 220 }
  ];
  public defaultColDef: ColDef = {
    // set the default column width
    width: 150,
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter',
    // enable floating filters by default
    floatingFilter: true,
    // make columns resizable
    resizable: true,
  };
  public defaultColGroupDef: Partial<ColGroupDef> = {
    marryChildren: true,
  };
  public columnTypes: {
    [key: string]: ColDef;
  } = {
    numberColumn: { width: 130, filter: 'agNumberColumnFilter' },
    medalColumn: { width: 100, columnGroupShow: 'open', filter: false },
    nonEditableColumn: { editable: false },
    dateColumn: {
      // specify we want to use the date filter
      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = cellValue.split('/');
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);
          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    },
  };
  public rowData!: any[];

  constructor() {}

  ngOnInit(): void {
    this.rowData = RefData.MOCK_DATA;
  }
}
