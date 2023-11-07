export function header_create() {
    let header = document.createElement('header')
    let container = document.createElement('div')
    let main_box = document.createElement('div')
    let div_header_left = document.createElement('div')
    let div_header_right = document.createElement('div')
    let div_search = document.createElement('div')
    let input = document.createElement('input')
    let img_search = document.createElement('img')
    let img_message = document.createElement('img')
    let img_bell = document.createElement('img')
    let hr = document.createElement('hr')

    container.classList.add('container')
    main_box.classList.add('main_box')
    div_header_left.classList.add('header_left')
    div_header_right.classList.add('header_right')
    div_search.classList.add('div_search')
    img_search.classList.add('img_search')
    img_search.src = './img/Group.png'
    img_search.alt = "#"
    img_message.classList.add('img_message')
    img_message.src = './img/Group.svg'
    img_message.alt = "#"
    img_bell.classList.add('img_bell')
    img_bell.src = './img/Group (1).svg'
    img_bell.alt = "#"

    document.body.prepend(header);
    header.append(container)
    container.append(main_box, hr)
    main_box.append(div_header_left, div_header_right)
    div_header_left.append(div_search)
    div_search.append(input, img_search)
    div_header_right.append(img_message, img_bell)
}




export function coin_reload(arr, place) {
    place.innerHTML = ""

    for(let item of arr){
        let main_div = document.createElement('div')
        let main_div_h1 = document.createElement('h1')
        let main_div_info = document.createElement('div')
        let main_div_left = document.createElement('div')
        let main_div_right = document.createElement('div')
        let main_div_img = document.createElement('img')
        let main_div_price = document.createElement('div')
        let left_h1 = document.createElement('h1')
        let left_h2 = document.createElement('h2')

        let num = 0
        for(let nextItem of item.changes){
            let box_change = document.createElement('div')
            let box_change_img = document.createElement('img')
            let box_change_right = document.createElement('div')
            let change_right_h1 = document.createElement('div')
            let change_right_p = document.createElement('div')

            box_change.classList.add('box_change')
            box_change_img.classList.add('box_change_img')
            if(num == 0 ){
                box_change_img.src = './public/img/Frame (1).svg'
            } else {
                box_change_img.src = './public/img/Vector (1).svg'
            }
            
            box_change_img.alt = ''
            box_change_right.classList.add('box_change_right')
            change_right_h1.classList.add('change_right_h1')
            change_right_h1.innerHTML = `$1 200=${nextItem.fromDollar}`
            change_right_p.classList.add('change_right_p')
            change_right_p.innerHTML = `1 grc =${nextItem.toDollar}`

            main_div_right.append(box_change)
            box_change.append(box_change_img, box_change_right)
            box_change_right.append(change_right_h1, change_right_p)

            num++
            if(num == 3){
                num=1
            }
        }

        main_div.classList.add('main_div')
        main_div.classList.add(`${item.name}`)
        main_div_h1.classList.add('main_div_h1')
        main_div_h1.innerHTML = item.name
        main_div_info.classList.add('main_div_info')
        main_div_left.classList.add('main_div_left')
        main_div_right.classList.add('main_div_right')
        main_div_img.classList.add('main_div_img')
        main_div_img.src = './public/img/Frame 2.png'
        main_div_img.alt = ''
        main_div_price.classList.add('main_div_price')
        left_h1.classList.add('left_h1')
        left_h1.innerHTML = item.balance
        left_h2.classList.add('left_h2')
        left_h2.innerHTML = item.price
        
        place.append(main_div)
        main_div.append(main_div_h1, main_div_info)
        main_div_info.append(main_div_left, main_div_right)
        main_div_left.append(main_div_img, main_div_price)
        main_div_price.append(left_h1, left_h2)
        
    }
}