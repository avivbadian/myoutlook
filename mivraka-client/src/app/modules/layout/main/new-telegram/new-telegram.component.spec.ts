import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTelegramComponent } from './new-telegram.component';

describe('NewTelegramComponent', () => {
  let component: NewTelegramComponent;
  let fixture: ComponentFixture<NewTelegramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTelegramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
