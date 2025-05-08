import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  enterInitialInvestment = '0';
  enterAnnualInterestRate = '0';
  enterExpectedReturn = '5';
  enterDuration = '10';

  onSubmit(){
    this.calculate.emit({
      // Convert string inputs to numbers using the + plus operator
      initialInvestment: +this.enterInitialInvestment,
      annualInvestment: +this.enterAnnualInterestRate,
      expectedReturn: +this.enterExpectedReturn,
      duration: +this.enterDuration
    });
  }
}
