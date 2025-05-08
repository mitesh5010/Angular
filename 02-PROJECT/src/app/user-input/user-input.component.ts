import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // enterInitialInvestment = '0';
  // enterAnnualInvestment = '0';
  // enterExpectedReturn = '5';
  // enterDuration = '10';

  //using signals
  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('5');
  enterDuration = signal('10');

  constructor(private investmentService : InvestmentService) {}

  onSubmit(){

    this.investmentService.calculateInvestmentResults({
      // Convert string inputs to numbers using the + plus operator
      initialInvestment: +this.enterInitialInvestment(),
      annualInvestment: +this.enterAnnualInvestment(),
      expectedReturn: +this.enterExpectedReturn(),
      duration: +this.enterDuration()
    });

    // Reset the input fields to their default values
    this.enterInitialInvestment.set('0');
    this.enterAnnualInvestment.set('0');
    this.enterExpectedReturn.set('5');
    this.enterDuration.set('10');
  }
}
