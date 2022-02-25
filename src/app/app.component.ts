import { Component, OnInit } from '@angular/core';
import { Records } from './records.model';
import RefData from './shared/refData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  appTitle: string = 'Project Dashboard';
  rowData!: Records[];
  
  item = "division";
  constructor() { }

  ngOnInit(): void {
    this.rowData = RefData.MOCK_DATA;
    //this.sample(this.rowData, this.item);
  }

  
  // sample(sample: Records[], item: string){
  //   const obj = {};
  //   for (var i = 0, j = sample.length; i < j; i++) {
  //   if (obj[sample[i][item]]) {
  //       console.log(sample[i][item]);
  //       obj[sample[i][item]]++;
  //   }else{
  //       obj[sample[i][item]] = 1;
  //   }
  //   }
  //   // obj gives you count for each unique sensorUUID.
  //   console.log(obj);
  //}
}
