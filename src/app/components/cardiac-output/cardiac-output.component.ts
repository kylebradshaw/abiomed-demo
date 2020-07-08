import { Component, OnInit } from '@angular/core';
import { getRandomArbitrary } from 'src/app/app.utils';

@Component({
  selector: 'app-cardiac-output',
  templateUrl: './cardiac-output.component.html',
  styleUrls: ['./cardiac-output.component.sass']
})
export class CardiacOutputComponent implements OnInit {
  output = 4.5;
  power = 0.7;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.output = getRandomArbitrary(1, 2) % 2 === 0 ? this.output + 0.1 : this.output - 0.1;
      this.output = +this.output.toFixed(1);
    }, getRandomArbitrary(5000, 20000));
    setInterval(() => {
      this.power = getRandomArbitrary(1, 2) % 2 === 0 ? this.power + 0.1 : this.power - 0.1;
      this.power = +this.power.toFixed(1);
    }, getRandomArbitrary(5000, 20000));
  }

}
