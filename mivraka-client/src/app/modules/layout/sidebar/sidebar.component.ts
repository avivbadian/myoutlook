import { TelegramsService } from './../../core/telegrams.service';
import { Component, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FolderNode {
  name: string;
  isSystem: boolean;
  children?: FolderNode[];
}

const TREE_DATA: FolderNode[] = [
  {
    name: 'דואר נכנס',
    isSystem: true,
    children: [
      {name: 'תורנויות', isSystem: false},
      {name: 'פרוייקטים', isSystem: false},
      {name: 'וירוסים', isSystem: false},
    ]
  }, {
    name: 'דואר נשלח',
    isSystem: true,
    children: [
      {
        name: 'מבצע קדש', isSystem: false,
        children: [
          {name: 'התראות', isSystem: false},
          {name: 'נצ', isSystem: false, children: [ {name: 'עד מתי', isSystem: false}]},
        ]
      }
    ]
  },
  {
    name: 'טיוטות',
    isSystem: true,
    children: []
  },
  {
    name: 'אשפה',
    isSystem: true,
    children: []
  },
  {
    name: 'תבניות',
    isSystem: true,
    children: []
  },

  {
    name: 'חרטא',
    isSystem: false,
    children: [
      {name: 'ברטא', isSystem: false},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // tslint:disable-next-line: variable-name

  currFolder: string;

  private _transformer = (node: FolderNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      // tslint:disable-next-line: object-literal-shorthand
      level: level,
    };
  }

  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor( private telegramsService: TelegramsService) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
  }

  setFolder(id: number) {
    this.telegramsService.setCurrentFolder(id);
  }

  folderSelected(node: FolderNode) {
    this.currFolder = node.name;
  }

  trackByFn(index, item: FolderNode) {
    return item.name;
  }
}
