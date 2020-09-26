import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
student : any;
id : number;
message : any;
  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    let response =  this.studentService.searchStudent(this.id);
    response.subscribe(data => {
      this.student = data;
      console.log(this.student);
    })
  }
  public updateStudent(){
    console.log(this.student)
    let response = this.studentService.updateStudent(this.student);
    response.subscribe(data => {
      this.message = data
      
    });
    this.router.navigate(['/students']);

  }
}
