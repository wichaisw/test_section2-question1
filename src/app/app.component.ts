import { Component, ɵɵsetComponentScope } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numValue: number = 0;
  calMode: string = 'isPrime';
  calResult: boolean | null = null;

  validateInput(val: number): void {
    let roundedNum = Math.round(val)
    this.numValue = roundedNum < 0 ? 1 : roundedNum;
    this.calculate();
  }

  calculate(): void {
    if(this.calMode === 'isPrime') {
      this.calResult = this.isPrime(this.numValue);
    };

    if(this.calMode === 'isFibonacci') {
      this.calResult = this.isFibonacci(this.numValue);
    }
  }

  isPrime(val: number): boolean {
    if(val < 2) return false;

    for(let i = 2; i < val; i++) {
      if(val % i === 0) return false;
    }

    return true;
  }

  isFibonacci(val: number): boolean {    
    if(isPerfectSquare(5 * val * val + 4) || isPerfectSquare(5 * val * val - 4)) {
      return true;
    }

    function isPerfectSquare(n: number) {
      
      let s: number = Math.floor(Math.sqrt(n));
      return (s**2 === n);
    }     

    return false;
  }
}
