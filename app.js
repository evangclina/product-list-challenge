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
        div.innerHTML= `
        <div class="dessert-img">
            <img src="${des.image.mobile}" alt="Photo of ${des.name}">
        </div>
        <div class="dessert-info">
            <h3>${des.category}</h3>
            <h2 class="name">${des.name}</h2>
            <h2 class="price">$${des.price}</h2>
        </div>
        <button class="add-btn"><img src="./assets/images/icon-add-to-cart.svg" alt="Shopping cart icon">Add to Cart</button>`
    
        dessertContainer.appendChild(div)
    })
}
buildDesserts()


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