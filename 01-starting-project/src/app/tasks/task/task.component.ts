<<<<<<< HEAD
<<<<<<< HEAD
import { Component, EventEmitter, Input, Output } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> 4a43422 (make complete button interective)
import { type Task } from './task.model';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4a43422 (make complete button interective)
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id)
  }
<<<<<<< HEAD
=======
>>>>>>> cac568e (create task component for each user and learn about difference of !/?)
=======
>>>>>>> 4a43422 (make complete button interective)
}
