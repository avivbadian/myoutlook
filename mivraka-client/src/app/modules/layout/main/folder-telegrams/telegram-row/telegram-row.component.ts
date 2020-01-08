import { Component, OnInit, Input } from '@angular/core';
import { Telegram } from '../../../../models/telegram';

@Component({
  selector: 'app-telegram-row',
  templateUrl: './telegram-row.component.html',
  styleUrls: ['./telegram-row.component.scss']
})
export class TelegramRowComponent implements OnInit {

  @Input() telegram: Telegram;

  constructor() { }

  ngOnInit() {
  }
}
