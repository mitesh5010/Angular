import {  AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string; text: string}>();
  enterTitle = '';
  enterText = '';

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement); 
  }

  onSubmit() {
    this.add.emit({title: this.enterTitle, text: this.enterText});
    // this.form?.nativeElement.reset();
    this.enterTitle = '';
    this.enterText = '';
  }
}
