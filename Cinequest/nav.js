let a = document.getElementsByClassName("filters")[0];
let x = document.getElementById("showfilters");
a.addEventListener("click", () => {
    x.removeAttribute("hidden");
});
a.addEventListener("mouseleave", () => {
    x.setAttribute("hidden", "true");
});
let b = document.getElementsByClassName("Language")[0];
let y = document.getElementById("lang");
b.addEventListener("click", () => {
    y.removeAttribute("hidden");
});
b.addEventListener("mouseleave", () => {
    y.setAttribute("hidden", "true");
});
let l1 = getElementById("hindi");
let l2 = getElementById("english");
let l3 = getElementById("chinese");
let l4 = getElementById("korean");

l1.addEventListener("click", () => {
    
});