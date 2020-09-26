import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Student } from './student.model';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {
API_URL:string="http://localhost:8080/api/";
  constructor(private httpClient:HttpClient) {}

  //private studentUrl = 'http://localhost:8080/StudentApplication/student';
	//private studentUrl = 'http://localhost:8080/api';

  public getStudents() {
    return this.httpClient.get(this.API_URL+'students');
  }
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$(){
    return this._refreshNeeded$;
  }
  public searchStudent(id){
    return this.httpClient.get(this.API_URL+"student/"+id);
  }

  public deleteStudent(studentId) {
    return this.httpClient.delete(this.API_URL + "student/"+ studentId).pipe(
      tap(()=>{
      this.refreshNeeded$.next();
    }));
  }

  public addStudent(student) {
    return this.httpClient.post<Student>(this.API_URL+"student", student);
  }
  public updateStudent(student) {
    return this.httpClient.put<Student>(this.API_URL+"student", student,{responseType:"text" as "json"}).pipe(
      tap(()=>{
      this.refreshNeeded$.next();
    }));
  }

}