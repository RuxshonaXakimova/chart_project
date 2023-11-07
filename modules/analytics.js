import Chart from 'chart.js/auto';

let ctx = document.querySelector('#myChart')


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

const data = {
  labels: [2, 4, 6, 8, 10, 12, 14],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 70, 90],
    fill: {
      target: 'origin',
      above: 'rgb(0, 151, 232, 0.20)',   // Area will be red above the origin
      below: 'rgb(1, 143, 255, 0.00)'
    },
    borderColor: '#018FFF',
    tension: 0.4,
    borderWidth: 1.5,
    pointStyle: false
  }],
};

const chart_line = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    elements: {
      point: {
        backgroundColor: 'blue',
        borderWidth: 5
      }
    },
    elements: {
      bar: {
        tension: 5,
        backgroundColor: 'blue',
        borderWidth: 5
      }
    }

  }
});



let ctx1 = document.querySelector('#first_chart')

const data_doughnut = {
  labels: [
    'Blue',
    'Yellow',
    'White',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'blue',
      'Yellow',
      'white'
    ],
    hoverOffset: 4,
    borderWidth: 0,
    hoverBorderWidth: 5
  }]
};

const doughnutChart = new Chart(ctx1, {
  type: 'doughnut',
  data: data_doughnut,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


let ctx2 = document.querySelector('#maket_canvas')

const labels = ['NOV 15', 'NOV 16', 'NOV 17', 'NOV 18']

const data_maket = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [8000, 4000, 10000, 8000, 2000],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.4
  }]
};

const myChart = new Chart(ctx2, {
  type: 'line',
  data: data_maket,
});






