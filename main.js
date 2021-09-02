// creating a window event listener 
window.addEventListener("keydown", function(e) {
    //here when i get the id of h1 using querySelector
    //so when ever the user click on his/her keyboard...i want it clear what is inside the h1..and change it to the user click
    document.querySelector("#demo").textContent = e.key;
})