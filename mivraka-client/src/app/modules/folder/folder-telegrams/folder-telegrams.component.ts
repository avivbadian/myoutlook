import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder-telegrams',
  templateUrl: './folder-telegrams.component.html',
  styleUrls: ['./folder-telegrams.component.scss']
})
export class FolderTelegramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  RowSelected(i: string) {
    console.log('Row number ' + i + ' was selected');
  }
}
