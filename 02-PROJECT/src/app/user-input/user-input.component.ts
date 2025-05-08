import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enterInitialInvestment = '0';
  enterAnnualInterestRate = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';

  onSubmit(){
    console.log("Form submitted!");
    console.log("Initial Investment: " + this.enterInitialInvestment);
    console.log("Annual Interest Rate: " + this.enterAnnualInterestRate);
    console.log("Expected Return: " + this.enterExpectedReturn);
    console.log("Duration: " + this.enterDuration);
  }
}
