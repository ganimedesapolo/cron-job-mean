import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import {UiService} from '../../services/ui.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  url: string;
  crontext: string;
  createdAt:string;
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) { 
    this.subscription  = this.uiService.
    onToggle().
    subscribe((value)=>(this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(!this.crontext){
      alert('Please add a cron expression!');
      return;
    }

    if(!this.url){
      alert('Please add a url!');
      return;
    }
    
  
    const newTask = {
      crontext:this.crontext,
      url:this.url,
      createdAt: ""
     
    }


  //@todo - emit event  
  this.onAddTask.emit(newTask);

  //clear form

    this.url=''
    this.crontext=''
    this.createdAt=''
    
 }

  

}
