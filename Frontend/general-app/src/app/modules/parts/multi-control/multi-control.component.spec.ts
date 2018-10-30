import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiControlComponent } from './multi-control.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { extractStyleParams } from '@angular/animations/browser/src/util';

describe('MultiControlComponent', () => {
  let component: MultiControlComponent;
  let fixture: ComponentFixture<MultiControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiControlComponent ],
      imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiControlComponent);
    component = fixture.componentInstance;
    component.formArray = new FormArray([new FormControl({
      name: 'Linha1'
    }),
    new FormControl({
      name: 'Linha2'
    }),
    new FormControl({
      name: 'Linha3'
    })
  ]
    );
    component.index = 0;
    component.title = 'Teste de Provider';
    component.mustHave = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('count must be correct', () => {
    expect(component.count === component.formArray.controls.length).toBeTruthy();
  });

  it('move up must work', () => {
    expect(component.count).toBeGreaterThan(2);
    const testIndex = 1;
    component.index = testIndex;
    const item = component.formArray[component.index];
    component.doMoveUp();
    expect(component.index).toBe(testIndex - 1);
    expect(item).toBe(component.formArray[component.index]);
  });

  it('move down must work', () => {
    expect(component.count).toBeGreaterThan(2);
    const testIndex = 1;
    component.index = testIndex;
    const item = component.formArray[component.index];
    component.doMoveDown();
    expect(component.index).toBe(testIndex + 1);
    expect(item).toBe(component.formArray[component.index]);
  });

  it('remove must work', () => {
    expect(component.count).toBeGreaterThan(2);
    const componentCount = component.count;
    component.index = 1;
    component.doRemove();
    expect(component.count).toBe(componentCount - 1);
  });
});
