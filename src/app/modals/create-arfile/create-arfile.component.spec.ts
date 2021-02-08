import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArfileComponent } from './create-arfile.component';

describe('CreateArfileComponent', () => {
  let component: CreateArfileComponent;
  let fixture: ComponentFixture<CreateArfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
