import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[];
  message : any;

  constructor(private router: Router, private studentService: StudentService) {

  }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((students: Student[]) => {
        this.students = students;
        
      });
  };

  public deleteStudent(id : number){
    if(confirm("Are you sure to delete "+id)) {
    this.router.navigate(['delete',id])
  }
}
  public updateStudent(id : number){
    this.router.navigate(['update',id])
  }
}
  


