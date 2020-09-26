import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  student : any;
  id : number;
  message : any;
    constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
        let response = this.studentService.deleteStudent(this.id);
      response.subscribe(data => this.message = data);
    
    
  }
  public studentList(){
    this.router.navigate(['/students']);
  }
  }


