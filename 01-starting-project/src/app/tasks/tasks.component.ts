import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
<<<<<<< HEAD
import { NewTaskComponent } from "./new-task/new-task.component";
=======
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)

@Component({
  selector: 'app-tasks',
  standalone: true,
<<<<<<< HEAD
  imports: [TaskComponent, NewTaskComponent],
=======
  imports: [TaskComponent],
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required: true}) name!:string;
<<<<<<< HEAD
  isAddingTask =false;

=======
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },  
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task)=>task.userId===this.userId);
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a43422 (make complete button interective)
  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task)=>task.id !== id)
  }

<<<<<<< HEAD
  onStartAddTask(){
    this.isAddingTask =true; 
  }

  onCancleTask(){
    this.isAddingTask =false;
  }

=======
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)
=======
>>>>>>> 4a43422 (make complete button interective)
}
