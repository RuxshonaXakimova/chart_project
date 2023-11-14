import { header_create } from "./modules/ui";
import { coin_reload } from "./modules/ui";
import { arr_info } from "./db";
import { line_chart_max } from "./modules/analytics";
import { doughtnut_chart_main } from "./modules/analytics";
import { line_chart_spending } from "./modules/analytics";

let box = document.querySelector('.box')
let open_menu_btn = document.querySelector('.open_menu_btn')
let menu_main = document.querySelector('.menu_main')
let close_menu_btn = document.querySelector('.menu_main button')
let box_one_p = document.querySelectorAll('.box_one_top_left p')
let maket_canvas = document.querySelector('#maket_canvas')
let first_chart = document.querySelector('#first_chart')
let myChart = document.querySelector('#myChart')

header_create()
coin_reload(arr_info, box)
doughtnut_chart_main(first_chart)
line_chart_max(maket_canvas)
line_chart_spending(myChart)


open_menu_btn.onclick = () =>{
    menu_main.classList.remove('close_menu_class')
    menu_main.classList.add('open_menu_class')
}

close_menu_btn.onclick = () => {
    menu_main.classList.remove('open_menu_class')
    menu_main.classList.add('close_menu_class')
}

box_one_p.forEach(text => {
    text.onclick = () => {
        box_one_p.forEach(item=>{
            item.classList.remove('choosed_p')
        })

        text.classList.add('choosed_p')
    }
})