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
  result: Division[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.rowData = RefData.MOCK_DATA;
    this.findOccurrence(this.rowData, "division");
  }

  findOccurrence(data: Record[], item: string){
    let obj: { [key: string]: number } = {};
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
      this.result.push({division: ele, count: obj[ele] });
    });
    // obj[k] gives you count for each unique division.
  }
}
