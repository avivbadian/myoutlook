import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramRowComponent } from './telegram-row.component';

describe('TelegramRowComponent', () => {
  let component: TelegramRowComponent;
  let fixture: ComponentFixture<TelegramRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegramRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegramRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
