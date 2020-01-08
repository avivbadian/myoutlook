import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTelegramContentComponent } from './folder-telegram-content.component';

describe('FolderTelegramContentComponent', () => {
  let component: FolderTelegramContentComponent;
  let fixture: ComponentFixture<FolderTelegramContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderTelegramContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTelegramContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
