import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonEditComponent } from './person-edit.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartsModule } from 'src/app/modules/parts/parts.module';
import { ActivatedRoute, convertToParamMap, Router, Params, ParamMap } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRouteStub } from 'src/app/testing/activated-route-stub';

const activatedRoute: ActivatedRouteStub = new ActivatedRouteStub({ id: 10});

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;

  // beforeEach(() => activatedRoute.setParamMap({ id: 99999 }));

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [PersonEditComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        PartsModule,
        BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
