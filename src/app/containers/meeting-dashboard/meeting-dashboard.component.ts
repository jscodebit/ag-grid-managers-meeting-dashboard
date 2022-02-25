import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Records } from '../../records.model';
import { NotificationService } from '../../service/notification.service';
import RefData from '../../shared/refData';

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrls: ['./meeting-dashboard.component.scss']
})
export class MeetingDashboardComponent implements OnInit {
  public rowData!: Records[];
  public columnDefs: (ColDef | ColGroupDef)[] = [
    // using default ColDef
    { headerName: 'Title',field: 'title' },
    { headerName: 'Division',field: 'division' },
    { headerName: 'Project Owner',field: 'project_owner', editable: true },
    // using number column type
    { headerName: 'Budget',field: 'budget', type: 'numberColumn', editable: true, cellRenderer: this.CurrencyCellRendererUSD },
    // { headerName: '',field: 'year', type: 'numberColumn' },
    { headerName: 'Status',field: 'status', editable: true, valueFormatter: this.stringFormatter,
      filterParams: {
        valueFormatter: this.stringFormatter
      }
    },
    // using date and non-editable column types
    { headerName: 'Created Date',field: 'created', type: ['dateColumn', 'nonEditableColumn'], width: 220 },
    { headerName: 'Modified Date',field: 'modified', type: ['dateColumn', 'nonEditableColumn'], width: 220 }
  ];
  public defaultColDef: ColDef = {
    // set the default column width
    width: 150,
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

  CurrencyCellRendererUSD(params: { value: number}) {
    var inrFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
    return inrFormat.format(params.value);
  }

  stringFormatter(params: { value: string }) {
    var fruit = params.value;
    var firstChar = fruit.slice(0, 1).toUpperCase();
    return firstChar + fruit.slice(1);
  }

  constructor(private notifyService: NotificationService) {}

  ngOnInit(): void {
    this.rowData = RefData.MOCK_DATA;
  }
  onCellValueChanged({value}: {value:any}) {
    console.log(value);
    this.showToasterInfo();
  }

  showToasterInfo(){
    this.notifyService.showInfo('Row updates', 'Row updates')  
  }

}
