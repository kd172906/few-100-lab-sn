import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1';
  tipPercentage: string = "20%";
  billAmount: number = 0;
  tipPercentageText: string = "";
  amountOfTip: number;
  totalToBePaid: number;
  tipPercentageShown: number;
  totalBill: number = 0;
  error: boolean = false;

  getButtonText(btnText: string) {
    this.tipPercentage = btnText;
    if (this.billAmount >= 0) {
      console.log("Hello");
      this.calculateFinalBill();
      document.getElementById("billAmountId").style.borderColor = "#ced4da";
      this.error = false;
    } else {
      document.getElementById("billAmountId").style.borderColor = "red";
      this.error = true;
    }
  }

  onSearchChange(bill: number) {
    if (bill >= 0) {
      this.billAmount = bill;
      this.calculateFinalBill();
      document.getElementById("billAmountId").style.borderColor = "#ced4da";
      this.error = false;
    } else {
      document.getElementById("billAmountId").style.borderColor = "red";
      this.error = true;
    }
  }

  calculateFinalBill() {
    this.tipPercentageText = this.tipPercentage;
    this.amountOfTip = this.billAmount * parseInt(this.tipPercentage.substring(0, 2)) / 100;
    console.log(this.billAmount + " " + this.amountOfTip);
    this.totalToBePaid = Number(this.billAmount) + Number(this.amountOfTip);

  }
}
