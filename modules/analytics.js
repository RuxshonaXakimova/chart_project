import Chart from 'chart.js/auto';

let ctx = document.querySelector('#myChart')

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

export function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }
  
    return values;
  }

const labels = months({count: 7});

const data = {
  labels: labels,
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

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
          },
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            suggestedMin: -10,
            suggestedMax: 200
          }
        }
      },
  };



  // const chart_doughnut = new Chart(ctx, {
  //   type: 'doughnut',
  //   data: data,
  //   options: {
  //     onClick: (e) => {
  //       const canvasPosition = getRelativePosition(e, chart);
  
  //       // Substitute the appropriate scale IDs
  //       const dataX = chart_doughnut.scales.x.getValueForPixel(canvasPosition.x);
  //       const dataY = chart_doughnut.scales.y.getValueForPixel(canvasPosition.y);
  //     }
      
  //   }
  // });



