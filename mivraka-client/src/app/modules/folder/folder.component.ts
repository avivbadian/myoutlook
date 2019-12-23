import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { telegrams } from '../telegrams';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  telegrams: [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = +params.get('folderId');
      if (index === 0) {
        index = 1;
      }
      this.telegrams = telegrams[index];
    });
  }

}
