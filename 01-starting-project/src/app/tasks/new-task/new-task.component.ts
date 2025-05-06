import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  
  enterTitle ='';
  enterSummary ='';
  enterDate ='';
  
  private taskService = inject(TasksService);

  onCancle(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDate
    },
      this.userId
    );
    this.close.emit();
  }
}


