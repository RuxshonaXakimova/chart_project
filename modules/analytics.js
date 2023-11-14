import Chart from 'chart.js/auto';


export function doughtnut_chart(canvas) {
  let ctx = canvas.getContext('2d')

  // ctx.canvas.parentNode.style.height = '310px'
  // ctx.canvas.parentNode.style.width = '310px'


  let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Ethereum', 'Bitcoin', 'Dash'],
      datasets: [{
        label: '',
        data: [400, 6200, 2500],
        backgroundColor: [
          'white',
          '#018FFF',
          'yellow'
        ],
        borderColor: [
          '#ffff',
          '#018FFF',
          'yellow'
        ]
      }]
    },
    options: {

      plugins: {

        legend: {
          display: true,
          position: 'right',
          align: 'middle',


          labels: {
            boxWidth: 3,
            boxHeight: 3,
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
          },



        }
      },
      cutout: 30,
      aspectRatio: 1

    }
  })


}


export function doughtnut_chart_main(canvas) {
  let ctx = canvas.getContext('2d')

  // ctx.canvas.parentNode.style.height = '305px'
  // ctx.canvas.parentNode.style.width = '305px'


  let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Ethereum', 'Bitcoin', 'Dash'],
      datasets: [{
        label: '',
        data: [400, 6200, 2500],
        backgroundColor: [
          'white',
          '#018FFF',
          'yellow'
        ],
        borderColor: [
          '#ffff',
          '#018FFF',
          'yellow'
        ]
      }]
    },
    options: {
      

      plugins: {

        legend: {
          display: true,
          position: 'bottom',
          align: 'left',
          labels: {
            boxWidth: 3,
            boxHeight: 3,
            padding: 20,
            usePointStyle: true,
            pointStyle: 'circle'
            
          },

        },
        
        
      },
      cutout: 80,
      aspectRatio: 1

    }
  })


}



export function wallets_line_chart_mini(canvas) {
  let ctx_mini = canvas.getContext('2d')

  ctx_mini.canvas.parentNode.style.height = '50px'
  ctx_mini.canvas.parentNode.style.width = '250px'

  let myChart_mini = new Chart(ctx_mini, {
    type: 'line',
    data: {
      labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER'],
      datasets: [{
        label: 'vo',
        data: [8000, 200, 8500, 200, 18000, 6000, 700, 8000, 200, 1000, 15000,],
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          '#644696',
          '#5454BD',
          '#00E8AC'
        ],
        borderWidth: 3,
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  })
}


export function line_chart_max(canvas) {
  let ctx_line_max = canvas.getContext('2d')

  
  let myChart_mini = new Chart(ctx_line_max, {
    type: 'line',
    data: {
      labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER'],
      datasets: [{
        label: 'vo',
        data: [8000, 200, 8500, 200, 18000, 6000, 700, 8000, 200, 1000, 15000,],
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          '#0097E8'
        ],
        borderWidth: 3,
        tension: 0.5,
        fill: {
                  target: 'origin',
                  above: 'rgb(0, 151, 232, 0.20)',   // Area will be red above the origin
                  below: 'rgb(1, 143, 255, 0.00)'
        },
        
      }]
    },
    options: {
     
      plugins: {
        legend: {
          display: false,
        },
        
    },
      elements: {
        point: {
          radius: 0
        },
      },

      
    }
  })



}



export function line_chart_spending(canvas) {
  let ctx_line_max = canvas.getContext('2d')

  
  let myChart_mini = new Chart(ctx_line_max, {
    type: 'line',
    data: {
      labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'SEPTEMBER', 'SEPTEMBER'],
      datasets: [{
        label: 'vo',
        data: [2, 10, 8, 12, 8, 14, 10],
        backgroundColor: [
          'blue'
        ],
        borderColor: [
          '#0097E8'
        ],
        borderWidth: 3,
        tension: 0.5,
        fill: {
                  target: 'origin',
                  above: 'rgb(0, 151, 232, 0.20)',   // Area will be red above the origin
                  below: 'rgb(1, 143, 255, 0.00)'
        },
        
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
     
      plugins: {
        legend: {
          display: false,
        },
        
      },
      elements: {
        point: {
          radius: 0
        },
      },

      
    }
  })



}








// let ctx = document.querySelector('#myChart')


// const MONTHS = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
//   ];

// export function months(config) {
//     var cfg = config || {};
//     var count = cfg.count || 12;
//     var section = cfg.section;
//     var values = [];
//     var i, value;

//     for (i = 0; i < count; ++i) {
//       value = MONTHS[Math.ceil(i) % 12];
//       values.push(value.substring(0, section));
//     }

//     return values;
//   }

// const labels = months({count: 7});

// const data = {
//   labels: [2, 4, 6, 8, 10, 12, 14],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 70, 90],
//     fill: {
//       target: 'origin',
//       above: 'rgb(0, 151, 232, 0.20)',   // Area will be red above the origin
//       below: 'rgb(1, 143, 255, 0.00)'
//     },
//     borderColor: '#018FFF',
//     tension: 0.4,
//     borderWidth: 1.5,
//     pointStyle: false
//   }],
// };

// let chart_line = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//     elements: {
//       point: {
//         backgroundColor: 'blue',
//         borderWidth: 5
//       }
//     },
//     elements: {
//       bar: {
//         tension: 5,
//         backgroundColor: 'blue',
//         borderWidth: 5
//       }
//     }

//   }
// });



// let ctx1 = document.querySelector('#first_chart')

// const data_doughnut = {
//   labels: [
//     'Blue',
//     'Yellow',
//     'White',
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'blue',
//       'Yellow',
//       'white'
//     ],
//     hoverOffset: 4,
//     borderWidth: 0,
//     hoverBorderWidth: 5
//   }]
// };

// let doughnutChart = new Chart(ctx1, {
//   type: 'doughnut',
//   data: data_doughnut,
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


// let ctx2 = document.querySelector('#maket_canvas')

// let labelsTwo = ['NOV 15', 'NOV 16', 'NOV 17', 'NOV 18']

// const data_maket = {
//   labels: labelsTwo,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [8000, 4000, 10000, 8000, 2000],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.4
//   }]
// };

// const myChart = new Chart(ctx2, {
//   type: 'line',
//   data: data_maket,
// });







