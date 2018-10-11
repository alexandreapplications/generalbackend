import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing.module';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonService } from './person/person.service';
import { MatTableModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartsModule } from '../parts/parts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    PartsModule
  ],
  declarations: [
    PersonListComponent,
    PersonEditComponent
  ],
  providers: [
    PersonService
  ]
})
export class AdminModule { }
