import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTelegramsComponent } from './folder-telegrams.component';

describe('FolderTelegramsComponent', () => {
  let component: FolderTelegramsComponent;
  let fixture: ComponentFixture<FolderTelegramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderTelegramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTelegramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
