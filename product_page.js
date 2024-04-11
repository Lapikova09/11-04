async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}
let data = await GetData()

let page = document.querySelector('.train_list')

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="/product_page.html"><button><img src="/img/Button (2).png" alt=""></button></a>` //element.page
        page.append(card)
    }
})

let buy = document.querySelector('.buy')
buy.addEventListener("click", ()=>{bag(1)});