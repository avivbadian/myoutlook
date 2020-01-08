import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('grid', {static: false}) myGrid: jqxGridComponent;
  isDarkTheme: Observable<boolean>;

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
