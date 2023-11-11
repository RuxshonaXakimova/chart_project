import { header_create } from "../../modules/ui";
import Chart from 'chart.js/auto';
import { arr_info } from "../../db";
import { reload_cards_wallets } from "../../modules/ui";
header_create()

let ctx = document.querySelector('#myChart').getContext('2d')
let cards = document.querySelector('.cards')

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER'],
        datasets: [{
            label: 'vo',
            data:[4000, 6200, 4500, 8200, 6200, 6000],
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                '#0097E8'
            ],
            borderWidth: 1,
            tension: 0.4,
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
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }
})

reload_cards_wallets(arr_info, cards)
// let ctx_mini = document.querySelector('#mini_canvas').getContext('2d')
let ctx_mini = document.querySelector('#mini_canvas').getContext('2d')
let main_bottom_canvas = document.querySelector('.main_bottom_canvas')
ctx_mini.canvas.parentNode.style.height = '50px'
ctx_mini.canvas.parentNode.style.width = '250px'
let myChart_mini = new Chart(ctx_mini, {
    type: 'line',
    data: {
        labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER', 'SEPTEMBER'],
        datasets: [{
            label: 'vo',
            data:[8000, 200, 8500, 200, 18000, 6000 , 700, 8000, 200, 1000, 15000,],
            backgroundColor: [
                'blue'
            ],
            borderColor: [
                '#644696'
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

