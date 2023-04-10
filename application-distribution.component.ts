import { Component, OnInit } from '@angular/core';
import{Chart} from 'chart.js';
@Component({
  selector: 'app-application-distribution',
  templateUrl: './application-distribution.component.html',
  styleUrls: ['./application-distribution.component.css']
})
export class ApplicationDistributionComponent implements OnInit{

  constructor() { }

//   ngOnInit(): void {
//    new Chart("myChart", {
//       type: 'line',
//       data: {
//         labels: ['1 oct', '3 oct', '7 oct', '10 oct', '14 oct', '20 oct','23 oct','27 oct','30 oct'],
//         datasets: [{
//           label: 'Grey Color',
//           data: [20, 16, 17, 18, 16, 17,18,17,19],
//           borderWidth: 1
//         },
//         {
//           label: 'Blue color',
//           data: [11, 12, 13,15,17,11,9,12,18],
//           borderWidth: 2
//         },
//         {
//           label: 'White color',
//           data: [5,6, 7,5,12, 14,11,15,10],
//           borderWidth: 3
//         }],
//       },
      
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }
 
public chart: any;
public hor: any;
public lineD: any;
public  pie: any;

// public hunt: any;

ngOnInit(): void {
  this.createChart();
  // this.huntChart();
  this.horizontal();
  this.lineChart();
  this.createPie();

}


createPie() {
this.pie = new Chart('MyPie', {
  type: 'doughnut',
  data: {
    datasets: [
      {
        backgroundColor: [
          '#0175A2',
          '#ccc',
        ],
        data: [50,10],
        borderRadius: [10, 0 ] ,

        borderWidth: 0,

      },
      {
        backgroundColor: '#F8F8F8',
        hoverBackgroundColor: '#F8F8F8',
        borderWidth: 0,
        data: [ ],
      },
      {
        backgroundColor: [
          'rgb(36, 195, 92)',
          '#ccc'
        ],

        data: [45, 15],
        borderRadius: [10, 0 ] ,

        borderWidth: 0,

      },
      {
        backgroundColor: '#F8F8F8',
        hoverBackgroundColor: '#F8F8F8',
        borderWidth: 0,
        data: [ ],
      },

      {
        backgroundColor: [
          'rgb(153, 46, 247)',
          '#ccc'

        ],

        data: [1000, 1000],
        borderRadius: [10, 0 ] ,

        borderWidth: 0,


      },

    ],
  },
  options: {
    cutout: '60%',
    // radius:'60%',  
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
});
}


lineChart() {
this.lineD = new Chart("line", {

type: 'line',

data: {

  labels: ['1 oct', '3 oct', '7 oct', '10 oct', '14 oct', '20 oct', '23 oct', '27 oct', '30 oct'],

  datasets: [{

    label: 'Grey Color',

    data: [1890, 2000, 6005,1930,2000,4000,2000,1560,3000],

    borderWidth: 1

  },

  {

    label: 'Blue color',

    data: [2000, 3000, 4000,3000,5000,3000,1840,4000,5999],

    borderWidth: 2

  },

  {

    label: 'White color',

    data: [3000, 1000, 3000,4000,2000,6000,4000,5000,2050],

    borderWidth: 3

  }],

},



options: {

  scales: {

    y: {
      ticks:{
        callback: function (value, index, values) {
          // convert the tick value to a string
          let label: any = value.toString();

          // check if the value is greater than or equal to 10000
          if (Number(value) >= 0) {
            // divide the value by 1000 and add "k" at the end
            label = (Number(value) / 1000).toFixed(0) + 'k';
          }

          return label;
        },
      },

      title: {
        display: true,
      },

    }

  }

}

});
}




createChart() {
this.chart = new Chart('MyChart', {
  type: 'bar',
  data: {
    labels: ['40%', '50%', '60%', '70%', '80%', '90%', '100%'],

    datasets: [
      {
        backgroundColor: [
          '#87CEFA',
          '#87CEFA',
          '#87CEFA',
          '#87CEFA',
          '#87CEFA',
          '#87CEFA',
          '#87CEFA',
        ],

        hoverBackgroundColor: [
          '#0175A2',
          '#0175A2',
          '#0175A2',
          '#0175A2',
          '#0175A2',
          '#0175A2',
          '#0175A2',
        ],

        barPercentage: 0.6,
        borderRadius: [10],

        data: [15000, 7000, 15000, 10000, 23323, 5000, 11000],
      },
    ],
  },
  options: {
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            // convert the tick value to a string
            let label: any = value.toString();

            // check if the value is greater than or equal to 10000
            if (Number(value) >= 5000) {
              // divide the value by 1000 and add "k" at the end
              label = (Number(value) / 1000).toFixed(0) + 'k';
            }

            return label;
          },
        },

        title: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
});
}


horizontal() {
this.hor = new Chart('hrBar', {
  type: 'bar',
  data: {
    labels: [, '0-10', '10-20', '20-30', '30-40', '40+'],
    datasets: [
      {
        backgroundColor: [
          'rgb(36, 195, 92) ',
          'rgb(36, 195, 92)',
          'rgb(36, 195, 92) ',
          'rgb(36, 195, 92)'
        ],
        barPercentage: 0.7,
        borderRadius: [10, 10, 10, 10],
        data: [30000, 15000, 10000, 5000, 6000, 2000],

      },
    ],
  },
  options: {
    indexAxis: 'y', // set the index axis to 'y'
    scales: {
      x: {
        ticks: {
          callback: function (value, index, values) {
            let label = value.toString();
            if (Number(value) >= 5000) {
              label = '  ';
            }
            return label;
          },
        },
        title: {
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  },
});
}

show1=false;

toggle1(){
  this.show1=!this.show1;
}


}

