import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateToggleComponent } from './create-toggle.component';

describe('CreateToggleComponent', () => {
  let component: CreateToggleComponent;
  let fixture: ComponentFixture<CreateToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
