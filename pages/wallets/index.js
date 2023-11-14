import { header_create } from "../../modules/ui";
import Chart from 'chart.js/auto';
import { arr_info } from "../../db";
import { reload_cards_wallets } from "../../modules/ui";
import { doughtnut_chart } from "../../modules/analytics";
import { line_chart_max } from "../../modules/analytics";
header_create()

let cards = document.querySelector('.cards')
let canvas_doughnut = document.querySelector('#myChart') 
let wallet_line_max = document.querySelector('#wallet_line_max')
let transactions_main = document.querySelector('.transactions_main')

doughtnut_chart(canvas_doughnut)

reload_cards_wallets(arr_info, cards)

line_chart_max(wallet_line_max)


//   ctx_mini.canvas.parentNode.style.height = '50px'
//   ctx_mini.canvas.parentNode.style.width = '250px'

transactions_mini(arr_info, transactions_main)

function transactions_mini(arr, place) {
    place.innerHTML = ""
    let blur = document.createElement('div')
    blur.classList.add('blur')

    for(let item of arr){
        let transactions_mini_box = document.createElement('div')
        let transactions_mini_box_left = document.createElement('div')
        let time = document.createElement('h3')
        let img = document.createElement('img')
        let info = document.createElement('info')
        let recieved_or_sent = document.createElement('p')
        let from_or_to = document.createElement('p')
        let sum = document.createElement('p')

        transactions_mini_box.classList.add('transactions_mini_box')
        transactions_mini_box_left.classList.add('transactions_mini_box_left')
        time.classList.add('transacton_mini_time')
        time.innerHTML = 'AM 01:16'
        // time.innerHTML = item.time
        img.classList.add('transacton_mini_timg')
        // if(item.sum[0] == "+"){
        //     img.src = '../../public/img/Group 14.svg'
        // } else{
        //     img.src = '../../public/img/Group 14.6.svg'
        // }
        img.src = '../../public/img/Group 14.png'
        img.alt = ''
        info.classList.add('transacton_mini_info')
        recieved_or_sent.classList.add('recieved_or_sent')
        recieved_or_sent.innerHTML = 'Received BitCoin'
        // recieved_or_sent.innerHTML = item.operation
        from_or_to.classList.add('from_or_to')
        from_or_to.innerHTML = 'From Elon Musk'
        // from_or_to.innerHTML = item.direction
        sum.classList.add('sum')
        sum.innerHTML = '+4,800'
        // sum.innerHTML = item.sum

        place.prepend(transactions_mini_box)
        transactions_mini_box.append(transactions_mini_box_left, sum)
        transactions_mini_box_left.append(time, img, info)
        info.append(recieved_or_sent, from_or_to)
    }

    place.append(blur)

}
