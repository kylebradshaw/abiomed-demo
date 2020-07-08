import { Component, OnInit } from '@angular/core';
import { getRandomArbitrary } from 'src/app/app.utils';

@Component({
  selector: 'app-impella-flow',
  templateUrl: './impella-flow.component.html',
  styleUrls: ['./impella-flow.component.scss']
})
export class ImpellaFlowComponent implements OnInit {
  numerator = 5.8;
  denominator = 4.5;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.numerator = getRandomArbitrary(1, 2) % 2 === 0 ? this.numerator + 0.1 : this.numerator - 0.1;
      this.numerator = +this.numerator.toFixed(1);
    }, getRandomArbitrary(5000, 20000));
    setInterval(() => {
      this.denominator = getRandomArbitrary(1, 2) % 2 === 0 ? this.denominator + 0.1 : this.denominator - 0.1;
      this.denominator = +this.denominator.toFixed(1);
    }, getRandomArbitrary(5000, 20000));
  }
}
