import { TelegramsService } from './../../core/telegrams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private telegramsService: TelegramsService
  ) { }

  ngOnInit() {
  }

  setFolder(id: number) {
    this.telegramsService.setCurrentFolder(id);
  }
}
