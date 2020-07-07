import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-motor-current',
  templateUrl: './motor-current.component.html',
  styleUrls: ['./motor-current.component.sass']
})
export class MotorCurrentComponent implements OnInit {

  motorChart: Chart;
  ecgData: number[];
  ecgDataReadOnly: number[];
  ecgLabels: number[];
  interval: any;
  idx = 0;

  constructor() { }

  ngOnInit(): void {
    this.ecgData = [0, 0, 0, 0, 0.0000050048828125, 0.0000137939453125, 0.000049560546875,
    0.00008740234375, 0.00015966796875, 0.000262451171875, 0.0003975830078125, 0.0005687255859375,
    0.0007802734375, 0.001037353515625, 0.0013468017578125, 0.00172119140625, 0.0021756591796875,
    0.0027232666015625, 0.0033880615234375, 0.004206787109375, 0.0052380371093750005,
    0.006586181640625, 0.008400146484375001, 0.010904296875, 0.0144892578125, 0.0196798095703125,
    0.049684204101562504, 0.0886883544921875, 0.11185363769531251, 0.134164306640625,
    0.137352294921875, 0.1160369873046875, 0.08516308593750001, 0.0539765625,
    0.014997436523437501, -0.015882568359375, -0.0387554931640625, -0.06125732421875,
    -0.0745780029296875, -0.07479357910156251, -0.0725338134765625, -0.0418538818359375,
    0.08582861328125001, 0.397717529296875, 0.8136408691406251, 1.2295617980957032,
    0.9944150390625001, 0.2824605712890625, -0.38949267578125, -0.597251220703125,
    -0.425675537109375, -0.1537947998046875, -0.0500914306640625, -0.0111041259765625,
    0.0027451171875, 0.0071739501953125, 0.008443359375, 0.0094327392578125, 0.012530517578125,
    0.0176046142578125, 0.0300162353515625, 0.0433489990234375, 0.056962646484375004,
    0.0704832763671875, 0.0770511474609375, 0.0898175048828125, 0.10311853027343751,
    0.117046142578125, 0.1312630615234375, 0.1529300537109375, 0.167607177734375,
    0.1899068603515625, 0.2124422607421875, 0.235044677734375, 0.2575535888671875,
    0.2724073486328125, 0.286978271484375, 0.3007579345703125, 0.3067425537109375,
    0.3106370849609375, 0.303756103515625, 0.2897236328125,0.25916931152343753,
    0.2200599365234375, 0.1728209228515625, 0.133416259765625, 0.086224853515625,
    0.05493408203125, 0.02409423828125, 0.00922607421875, -0.0043409423828125,
    -0.0097349853515625, -0.013127685546875, -0.01423095703125, -0.013834716796875,
    -0.012556030273437501, -0.010675048828125, -0.00835888671875,
    -0.0057305908203125, -0.0000562744140625];
    this.ecgDataReadOnly = [...this.ecgData];
    this.ecgLabels = [...this.ecgData].fill('');
    this.motorChart = new Chart('motor', {
      type: 'line',
      data: {
        labels: this.ecgLabels,
        datasets: [{
          label: null,
          data: this.ecgData,
          borderColor: 'rgba(255, 99, 132, 1)',
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
              min: -0.6,
              max: 1.3,
            }
          }]
        }
      }
    });
    this.interval = setInterval(() => {
      this.addData(this.idx);
      this.removeData(this.idx);
      if (this.idx === 99) {
        this.idx = 0;
      } else {
        this.idx++;
      }
    }, 30);
  }

  // https://www.chartjs.org/docs/latest/developers/updates.html
  addData(idx): void {
    const chart = this.motorChart;
    const data = this.ecgDataReadOnly;
    chart.data.labels.push('');
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push([...data][idx]);
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

  stop(): void {
    clearInterval(this.interval);
  }
}
