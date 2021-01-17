import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArfileUploadComponent } from './arfile-upload.component';

describe('ArfileUploadComponent', () => {
  let component: ArfileUploadComponent;
  let fixture: ComponentFixture<ArfileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArfileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArfileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
