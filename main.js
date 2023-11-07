import { header_create } from "./modules/ui";
import { coin_reload } from "./modules/ui";

let box = document.querySelector('.box')

header_create()

let arr_info = [
    {
        name:'BitCoin',
        img: './img/Component 1.png',
        balance: '600 gRC',
        price: '$30,000,000',
        changes: [
            {
                fromDollar: '0,074 grc',
                toDollar: '$6 542, 35'
            },
            {
                fromDollar: '0,034 grc',
                toDollar: '$6 264, 35'
            },
            {
                fromDollar: '0,075 grc',
                toDollar: '$6 642, 22'
            }
        ]
    },
    {
        name:'GridCoin',
        img: './img/Component 1.png',
        balance: '600 gRC',
        price: '$30,000,000',
        changes: [
            {
                fromDollar: '0,074 grc',
                toDollar: '$6 542, 35'
            },
            {
                fromDollar: '0,034 grc',
                toDollar: '$6 264, 35'
            },
            {
                fromDollar: '0,075 grc',
                toDollar: '$6 642, 22'
            }
        ]
    },
    {
        name:'Ethereum',
        img: './img/Component 1.png',
        balance: '600 gRC',
        price: '$30,000,000',
        changes: [
            {
                fromDollar: '0,074 grc',
                toDollar: '$6 542, 35'
            },
            {
                fromDollar: '0,034 grc',
                toDollar: '$6 264, 35'
            },
            {
                fromDollar: '0,075 grc',
                toDollar: '$6 642, 22'
            }
        ]
    },
    {
        name:'Aeternity',
        img: './img/Component 1.png',
        balance: '600 gRC',
        price: '$30,000,000',
        changes: [
            {
                fromDollar: '0,074 grc',
                toDollar: '$6 542, 35'
            },
            {
                fromDollar: '0,034 grc',
                toDollar: '$6 264, 35'
            },
            {
                fromDollar: '0,075 grc',
                toDollar: '$6 642, 22'
            }
        ]
    }
]



coin_reload(arr_info, box)