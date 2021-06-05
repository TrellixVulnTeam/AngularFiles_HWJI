import {Input, Component, OnInit } from '@angular/core';
import IPropertyModelAngular from '../../share/IPropertyModelAngular';

@Component({
  selector: 'properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css']
})
export class PropertiesTableComponent implements OnInit {
@Input() property: IPropertyModelAngular;
@Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
