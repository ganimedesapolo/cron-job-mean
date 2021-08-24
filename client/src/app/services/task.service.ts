import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Task} from '../Task';
////import {TASKS} from '../mock-tasks';
import {Observable , of} from 'rxjs';


const httpOptions = {
 headers: new HttpHeaders({
'Content-Type': 'application/json'
 })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private  apiUrl = "api/v1/tasks";

  constructor(private http:HttpClient) {

   }

  getTasks(): Observable<Task[]>  {
   
    return this.http.get<Task[]>(this.apiUrl)
  }




  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task._id}`;
    return this.http.delete<Task>(url);
  }




  addTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl, task, httpOptions);
  }




}
