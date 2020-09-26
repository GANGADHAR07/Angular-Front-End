import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {

  student : Student=new Student();

  constructor(private router: Router, private studentService: StudentService) {

  }

  addStudent(): void {
    // this.studentService.createStudent(this.student)
    //     .subscribe( data => {
    //       alert("Student created successfully.");
    //     });
    console.log(this.student)
    let response = this.studentService.addStudent(this.student);
    response.subscribe(data => {
      alert("Student created successfully");
    });
    this.router.navigate(['/students']);
  };
}
