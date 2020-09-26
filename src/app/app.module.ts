import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StudentService} from './student.service';
import {HttpClientModule} from "@angular/common/http";
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DataTablesModule } from 'angular-datatables';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HeaderComponent } from './header/header.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    HeaderComponent,
    DeleteStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
