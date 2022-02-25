import { Component, OnInit } from '@angular/core';
import { Division } from './division.model';
import { Record } from './record.model';
import RefData from './shared/refData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appTitle: string = 'Project Dashboard';
  rowData!: Record[];
  divisionObject: Division[] = [];
  statusReport = [] as any;
  projectOwner = [] as any;
  
  constructor() { }

  ngOnInit(): void {
    this.rowData = RefData.MOCK_DATA;
    this.divisionObject = this.findOccurrence(this.rowData, "division");
    this.statusReport = this.findOccurrence(this.rowData, "status");
    this.projectOwner = this.findOccurrence(this.rowData, "project_owner");
  }

  findOccurrence(data: Record[], item: string){
    let obj: { [key: string]: number } = {};
    let result = [] as any;
    for (let i = 0, j = data.length; i < j; i++) {
      let record = data[i] as Record;
      let itemKey = (record as any)[item];

      if (obj[itemKey]) {
          obj[itemKey]++;
      } else{
          console.log(obj[itemKey]);
          obj[itemKey] = 1;
        }
      }
    Array.from(Object.keys(obj), ele => {
      console.log(obj[ele]);
      result.push({param: ele, count: obj[ele] });
    });
    return result;
    // obj[k] gives you count for each unique division.
  }
}
