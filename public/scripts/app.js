const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
toggleThemeBtn.forEach(btn => {
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

const overlay = document.getElementById("overlay");
const cart_btn = document.getElementById("cart-btn")
const cart = document.getElementById("cart");
const close = document.querySelectorAll(".close");
const menu_btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const store = document.getElementById("store");
const down = document.getElementById("down");
const sub_store = document.getElementById("sub-store");

cart_btn.addEventListener("click", () => {
    cart.classList.remove("left-[-65%]")
    cart.classList.add("left-0")
    overlay.classList.remove("invisible" , "opacity-0");
})

menu_btn.addEventListener("click", () => {
    menu.classList.remove("right-[-65%]")
    menu.classList.add("right-0")
    overlay.classList.remove("invisible" , "opacity-0");
})

store.addEventListener("click", (e) => {

    if(store.classList.contains("grandchild:text-orange-300")){
        store.classList.remove("grandchild:text-orange-300")
        down.classList.add("rotate-90")
        sub_store.classList.add("hidden");

    }else{
        store.classList.add("grandchild:text-orange-300")
        down.classList.remove("rotate-90")
        sub_store.classList.remove("hidden");
    }

})

overlay.addEventListener("click", () => {
    cart.classList.remove("left-0")
    cart.classList.add("left-[-65%]")
    menu.classList.remove("right-0")
    menu.classList.add("right-[-65%]")
    overlay.classList.add("invisible" , "opacity-0");
})

close.forEach(close =>{
    close.addEventListener("click", () => {
    cart.classList.add("left-[-65%]")
    menu.classList.add("right-[-65%]")
    overlay.classList.add("invisible" , "opacity-0");
    })
})

