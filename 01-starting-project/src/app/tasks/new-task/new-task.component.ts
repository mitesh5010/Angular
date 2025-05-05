import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancle = new EventEmitter<void>();
  enterTitle ='';
  enterSummary ='';
  enterDate ='';
  
  onCancle(){
    this.cancle.emit();
  }
}


