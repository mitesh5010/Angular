import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  // imports: [TaskComponent, NewTaskComponent],
  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required: true}) name!:string;
  isAddingTask =false;
  
  constructor(private taskService : TasksService) {  }


  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask =true; 
  }

  onCloseAddTask(){
    this.isAddingTask =false;
  }
}
