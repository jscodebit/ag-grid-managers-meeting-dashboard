import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  @Input() items!: any[]; 

  constructor() { }

  ngOnInit(): void {
  }

}
