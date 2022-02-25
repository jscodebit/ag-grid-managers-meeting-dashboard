import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Records } from './records.model';
import { NotificationService } from './service/notification.service';
import RefData from './shared/refData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
}
