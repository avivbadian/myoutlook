import { TelegramsService } from './../../../core/telegrams.service';
import { Component, OnInit, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Telegram } from 'src/app/modules/models/telegram';
import { MatList } from '@angular/material';

export enum KEY_CODE {
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  RIGHT_ARROW = 39,
  DOWN_ARROW = 40,

  A_KEY = 65,
  SHIFT_KEY = 16

}

enum NAVIGATION_DIRECTION {
  NONE = 0,
  UP = 1,
  DOWN = 2,
}

@Component({
  selector: 'app-folder-telegrams',
  templateUrl: './folder-telegrams.component.html',
  styleUrls: ['./folder-telegrams.component.scss']
})
export class FolderTelegramsComponent implements OnInit, OnDestroy {
  telegrams: Telegram[];
  selectedRowIndex: number;
  markIndex: number;
  currentFolder: number;
  subscription: Subscription;
  dataAdapter: any;
  navDir: NAVIGATION_DIRECTION;

  constructor(
    private telegramsService: TelegramsService
  ) { }

  markAll() {
    for (let i = 0; i < this.telegrams.length; i++) {
      this.telegrams[i].isMarked = true;
    }
  }

  unmarkAll() {
    for (let i = 0; i < this.telegrams.length; i++) {
      this.telegrams[i].isMarked = false;
    }
  }

  ngOnInit() {
    this.subscription = this.telegramsService.currentFolder$.subscribe(
      currentFolder => {
        this.currentFolder = currentFolder;
        this.telegramsService.getTelegrams(currentFolder).subscribe(teles => {
          this.telegrams = teles;
        });
      });

    window.onload = () => {
      document.onselectstart = () => {
        return false;
      };
    };

    this.navDir = NAVIGATION_DIRECTION.NONE;
    this.markIndex = -1;
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
    this.subscription && this.subscription.unsubscribe();
  }

  telegramSelected(rowIndex: number, event) {
    this.navDir = NAVIGATION_DIRECTION.NONE;
    if (rowIndex < 0 || rowIndex > this.telegrams.length - 1) {
      return;
    }
    if (!event.ctrlKey && !event.shiftKey) {
        this.handleSimpleSelect(rowIndex);
    } else {
      if (event.ctrlKey) {
        this.handleAltSelect(rowIndex);
      } else if (event.shiftKey) {
        this.handleShiftSelect(rowIndex);
      }
    }
  }

  handleSimpleSelect(rowIndex: number) {
    for (let i = 0; i < this.telegrams.length; i++) {
      if (i == rowIndex) {
        this.telegrams[i].isSelected = true;
        this.telegrams[i].isMarked = true;
      } else {
        this.telegrams[i].isSelected = false;
        this.telegrams[i].isMarked = false;
      }
    }
    this.selectedRowIndex = rowIndex;
    this.markIndex = this.selectedRowIndex;
  }

  handleAltSelect(rowIndex: number) {
      if (rowIndex === this.selectedRowIndex) {
        this.telegrams[rowIndex].isSelected = false;
      }
      this.telegrams[rowIndex].isMarked = !this.telegrams[rowIndex].isMarked;
  }

  handleShiftSelect(rowIndex: number) {
    this.unmarkAll();
    if (this.selectedRowIndex > rowIndex) {
          for (let i = rowIndex; i <= this.selectedRowIndex; i++) {
            this.telegrams[i].isMarked = true;
          }
        } else {
          for (let i = this.selectedRowIndex; i <= rowIndex; i++) {
            this.telegrams[i].isMarked = true;
          }
        }
    this.markIndex = rowIndex;
  }

  handleNavigation(rowIndex: number) {
    if (rowIndex < 0 || rowIndex > this.telegrams.length - 1) {
      return;
    }

    for (let i = 0; i < this.telegrams.length; i++) {
      this.telegrams[i].isSelected = false;
      this.telegrams[i].isMarked = false;
    }

    this.telegrams[rowIndex].isSelected = true;
    this.telegrams[rowIndex].isMarked = true;

    this.selectedRowIndex = rowIndex;
    this.markIndex = this.selectedRowIndex;
  }

  handleShiftUpNavigation() {
    let index = this.markIndex - 1;
    if (this.navDir === NAVIGATION_DIRECTION.DOWN) {
      index = this.markIndex;
    }

    if (index < 0 || index > this.telegrams.length - 1) {
      return;
    }
    if (this.selectedRowIndex != index) {
      this.telegrams[index].isMarked = !this.telegrams[index].isMarked;
    }

    this.markIndex = index;
    this.navDir = NAVIGATION_DIRECTION.UP;
  }

  handleShiftDownNavigation() {
    let index = this.markIndex + 1;
    if (this.navDir === NAVIGATION_DIRECTION.UP) {
      index = this.markIndex;
    }
    if (index < 0 || index > this.telegrams.length - 1) {
      return;
    }
    if (this.selectedRowIndex != index) {
      this.telegrams[index].isMarked = !this.telegrams[index].isMarked;
    }
    this.markIndex = index;
    this.navDir = NAVIGATION_DIRECTION.DOWN;
  }
}
