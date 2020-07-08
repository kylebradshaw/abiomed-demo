import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-motor-current',
  templateUrl: './motor-current.component.html',
  styleUrls: ['./motor-current.component.sass']
})
export class MotorCurrentComponent implements OnInit, OnChanges {
  @Input() scrollSpeed: number;
  motorChart: Chart;
  motorData: number[];
  motorDataReadOnly: number[];
  motorLabels: number[];
  interval: any;
  idx = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes[`scrollSpeed`]) {
      clearInterval(this.interval);
      this.internal(parseInt(changes.scrollSpeed.currentValue));
    }
  }


  ngOnInit(): void {
    this.motorData = [0, 0.2238208984483693, 0.4335783066915438, 0.6160923953358198, 0.7598951329518135, 0.8559508646656382, 0.8982240555854445, 0.8840585256558198, 0.8143443472194175, 0.6934619184982104, 0.5290067270632259, 0.33131209741621, 0.1127999102078737, -0.11279991020787385, -0.33131209741621015, -0.5290067270632257, -0.6934619184982104, -0.8143443472194174, -0.8840585256558198, -0.8982240555854445, -0.8559508646656383, -0.7598951329518135, -0.6160923953358194, -0.4335783066915438, -0.22382089844836905, -2.2043642384652358e-16, 0.22382089844836942, 0.4335783066915441, 0.6160923953358197, 0.7598951329518137, 0.8559508646656382, 0.8982240555854445, 0.8840585256558198, 0.8143443472194173, 0.6934619184982107, 0.529006727063226, 0.3313120974162102, 0.11279991020787351, -0.11279991020787444, -0.3313120974162095, -0.5290067270632255, -0.6934619184982103, -0.8143443472194177, -0.88405852565582, -0.8982240555854443, -0.8559508646656384, -0.7598951329518137, -0.6160923953358196, -0.4335783066915433, -0.22382089844836847, -4.4087284769304716e-16, 0.2238208984483692, 0.4335783066915439, 0.6160923953358202, 0.759895132951814, 0.8559508646656382, 0.8982240555854445, 0.8840585256558198, 0.8143443472194174, 0.6934619184982098, 0.5290067270632263, 0.33131209741621037, 0.11279991020787372, -0.11279991020787423, -0.33131209741621087, -0.5290067270632253, -0.6934619184982111, -0.8143443472194175, -0.8840585256558195, -0.8982240555854445, -0.8559508646656384, -0.7598951329518129, -0.6160923953358198, -0.4335783066915449, -0.2238208984483687, -6.613092715395706e-16, 0.2238208984483705, 0.4335783066915437, 0.6160923953358188, 0.7598951329518138, 0.855950864665638, 0.8982240555854445, 0.8840585256558198, 0.8143443472194168, 0.6934619184982099, 0.5290067270632265, 0.3313120974162091, 0.11279991020787396, -0.11279991020787557, -0.33131209741621065, -0.5290067270632253, -0.6934619184982109, -0.8143443472194175, -0.8840585256558201, -0.8982240555854445, -0.8559508646656384, -0.759895132951813, -0.6160923953358199, -0.43357830669154224, -0.22382089844836892];
    this.motorDataReadOnly = [...this.motorData];
    this.motorLabels = Array(this.motorDataReadOnly.length).fill('');
    this.motorChart = new Chart('motor', {
      type: 'line',
      data: {
        labels: this.motorLabels,
        datasets: [{
          label: 'motor',
          data: this.motorData,
          borderColor: 'rgba(82, 189, 22, 1)',
          borderWidth: 1
        }]
      },
      options: {
        animation: {duration: 0},
        cubicInterpolationMode: 'monotone',
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: (tooltipItem) => tooltipItem.xLabel
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: -3,
              max: 3,
            }
          }]
        }
      }
    });
  }

  internal(speed): void {
    this.interval = setInterval(() => {
      this.addData(this.idx);
      this.removeData(this.idx);
      if (this.idx === 99) {
        this.idx = 0;
      } else {
        this.idx++;
      }
    }, speed);
  }

  // https://www.chartjs.org/docs/latest/developers/updates.html
  addData(idx): void {
    const chart = this.motorChart;
    const motorData = this.motorDataReadOnly;
    chart.data.labels.push('');
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push([...motorData][idx]);
    });
    chart.update();
  }

  removeData(idx): void {
    const chart = this.motorChart;
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
    chart.update();
  }

}
