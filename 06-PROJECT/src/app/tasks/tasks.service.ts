import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
  providedIn :"root",
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  onAddTask(taskData:{title: string; description: string}) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    }

    this.tasks.update((oldtasks)=> [...oldtasks, newTask])
  }

  updateTaskStatus(taskId:string, newStatus: TaskStatus){
    this.tasks.update((oldtasks)=>
      oldtasks.map((task)=>
        task.id === taskId ? {...task, status: newStatus} : task 
      )
    )
  }
}