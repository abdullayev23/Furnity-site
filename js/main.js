let hamburger = document.querySelector(".burger")
let elBody = document.body;
let elUl = document.querySelector(".head-ul")
let burgerClose = document.querySelector(".close")
let elLink = document.querySelectorAll(".list-link")
let overley = document.querySelector(".spc")




hamburger.addEventListener("click", ()=>{
    elUl.classList.toggle("active-ul")
    elBody.classList.toggle("scroll")
    burgerClose.classList.remove("hidden")
    overley.classList.toggle("overley")
})

overley.addEventListener("click", ()=>{
    elUl.classList.remove("active-ul")
    elBody.classList.remove("scroll")
    burgerClose.classList.add("hidden")
    overley.classList.remove("overley")
})

burgerClose.addEventListener("click", ()=>{
    elUl.classList.remove("active-ul")
    elBody.classList.remove("scroll")
    burgerClose.classList.add("hidden")
    overley.classList.remove("overley")
})

for (let nom of elLink) {
    nom.addEventListener("click", ()=>{
        elUl.classList.remove("active-ul")
        elBody.classList.remove("scroll")
        burgerClose.classList.add("hidden")
        overley.classList.remove("overley")
    })
}

let sale  = document.querySelector(".sale")
let elBtn = document.querySelector(".sale-btn")
let sal  = document.querySelector(".sal")
elBtn.addEventListener("click", () =>{
    let count = Number(sale.textContent); count += 392;
    sale.textContent = count;

    let counts = parseInt(sal.textContent); counts += 1;
    sal.textContent = `${counts}`;
})

let sale2  = document.querySelector(".sale2")
let elBtn2 = document.querySelector(".sale-btn2")
let sal2  = document.querySelector(".sal2")
elBtn2.addEventListener("click", () =>{
    let count = Number(sale2.textContent); count += 299;
    sale2.textContent = count;

    let counts = parseInt(sal2.textContent); counts += 1;
    sal2.textContent = `${counts}`;
})

let sale3  = document.querySelector(".sale3")
let elBtn3 = document.querySelector(".sale-btn3")
let sal3  = document.querySelector(".sal3")
elBtn3.addEventListener("click", () =>{
    let count = Number(sale3.textContent); count += 519;
    sale3.textContent = count;

    let counts = parseInt(sal3.textContent); counts += 1;
    sal3.textContent = `${counts}`;
})

let sale4  = document.querySelector(".sale4")
let elBtn4 = document.querySelector(".sale-btn4")
let sal4  = document.querySelector(".sal4")
elBtn4.addEventListener("click", () =>{
    let count = Number(sale4.textContent); count += 921;
    sale4.textContent = count;

    let counts = parseInt(sal4.textContent); counts += 1;
    sal4.textContent = `${counts}`;
})

let sale5  = document.querySelector(".sale5")
let elBtn5 = document.querySelector(".sale-btn5")
let sal5  = document.querySelector(".sal5")
elBtn5.addEventListener("click", () =>{
    let count = Number(sale5.textContent); count += 392;
    sale5.textContent = count;

    let counts = parseInt(sal5.textContent); counts += 1;
    sal5.textContent = `${counts}`;
})

let sale6  = document.querySelector(".sale6")
let elBtn6 = document.querySelector(".sale-btn6")
let sal6  = document.querySelector(".sal6")
elBtn6.addEventListener("click", () =>{
    let count = Number(sale6.textContent); count += 299;
    sale6.textContent = count;

    let counts = parseInt(sal6.textContent); counts += 1;
    sal6.textContent = `${counts}`;
})

let sale7  = document.querySelector(".sale7")
let elBtn7 = document.querySelector(".sale-btn7")
let sal7  = document.querySelector(".sal7")
elBtn7.addEventListener("click", () =>{
    let count = Number(sale7.textContent); count += 519;
    sale7.textContent = count;

    let counts = parseInt(sal7.textContent); counts += 1;
    sal7.textContent = `${counts}`;
})

let sale8  = document.querySelector(".sale8")
let elBtn8 = document.querySelector(".sale-btn8")
let sal8  = document.querySelector(".sal8")
elBtn8.addEventListener("click", () =>{
    let count = Number(sale8.textContent); count += 921;
    sale8.textContent = count;

    let counts = parseInt(sal8.textContent); counts += 1;
    sal8.textContent = `${counts}`;
})

let sale9  = document.querySelector(".sale9")
let elBtn9 = document.querySelector(".sale-btn9")
let sal9  = document.querySelector(".sal9")
elBtn9.addEventListener("click", () =>{
    let count = Number(sale9.textContent); count += 392;
    sale9.textContent = count;

    let counts = parseInt(sal9.textContent); counts += 1;
    sal9.textContent = `${counts}`;
})

let sale10  = document.querySelector(".sale10")
let elBtn10 = document.querySelector(".sale-btn10")
let sal10  = document.querySelector(".sal10")
elBtn10.addEventListener("click", () =>{
    let count = Number(sale10.textContent); count += 299;
    sale10.textContent = count;

    let counts = parseInt(sal10.textContent); counts += 1;
    sal10.textContent = `${counts}`;
})

let sale11  = document.querySelector(".sale11")
let elBtn11 = document.querySelector(".sale-btn11")
let sal11  = document.querySelector(".sal11")
elBtn11.addEventListener("click", () =>{
    let count = Number(sale11.textContent); count += 921;
    sale11.textContent = count;

    let counts = parseInt(sal11.textContent); counts += 1;
    sal11.textContent = `${counts}`;
})

let sale12  = document.querySelector(".sale12")
let elBtn12 = document.querySelector(".sale-btn12")
let sal12  = document.querySelector(".sal12")
elBtn12.addEventListener("click", () =>{
    let count = Number(sale12.textContent); count += 519;
    sale12.textContent = count;

    let counts = parseInt(sal12.textContent); counts += 1;
    sal12.textContent = `${counts}`;
})