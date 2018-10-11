import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiControlComponent } from './multi-control.component';

describe('MultiControlComponent', () => {
  let component: MultiControlComponent;
  let fixture: ComponentFixture<MultiControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
