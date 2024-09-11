async function getData(){
    try{
        const res = await fetch(`./data.json`)
        const data = await res.json()
        return data
    }catch(error){
        console.log(error)
    }
}

async function buildDesserts(){
    const dessert = await getData()
    const dessertContainer = document.querySelector(".desserts")
    
    dessert.forEach((des, i) => {
        const div = document.createElement("div")
        div.classList.add(`dessert`)
        div.classList.add(`dessert-${i}`)
        div.innerHTML= `
        <div class="dessert-img">
            <img src="${des.image.mobile}" alt="Photo of ${des.name}">
        </div>
        <div class="dessert-info">
            <h3>${des.category}</h3>
            <h2 class="name">${des.name}</h2>
            <h2 class="price">$${des.price}</h2>
        </div>
        <div>
            <button class="add-btn" onclick="clickBtn(${i})"><img src="./assets/images/icon-add-to-cart.svg" alt="Shopping cart icon">Add to Cart</button>
            <div class="new-btn">
                <img src="./assets/images/icon-decrement-quantity.svg" alt="decrement icon">
                <p  class="counter">1</p>
                <img src="./assets/images/icon-increment-quantity.svg" alt="increment icon">
            </div>
        </div>`
        dessertContainer.appendChild(div)
    })
}
buildDesserts()


function clickBtn(id){
    document.querySelector(`.dessert-${id} .add-btn`).style.display = "none"

    const counter = 1;
}


//click button 
// async function clickBtn(){
//     buildDesserts()

//     const buttons = document.querySelectorAll(".btn")
//     console.log(buttons)
//     const img = document.querySelectorAll(".dessert-img")


// }

// clickBtn()


// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         btn.classList.add("select")
//         btn.classList.remove("add")
//     })
// })