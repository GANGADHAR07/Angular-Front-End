import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import {AddStudentComponent} from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'add', component: AddStudentComponent },
  
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: 'delete/:id', component: DeleteStudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
