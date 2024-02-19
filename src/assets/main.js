
const bar = document.querySelector(".bar");
const menu = document.querySelector(".menu");

bar.addEventListener("click", function(){
menu.classList.toggle ("menu-active");
})

const menuLists = document.querySelectorAll(".active");

menuLists.forEach(function (menuList) {
    menuList.addEventListener("click", function () {
        document.querySelector(".active-list")?.classList.remove("active-list");
       
        menuList.classList.add("active-list");
    });
});

const imagContainer = document.querySelector(".image-box-container");
imagContainer.addEventListener("click", function(){
    document.querySelector(".drop-down-menu-show")?. classList.remove("drop-down-menu-show");  
})



        // Add "active-color" to the clicked menuList
   
   
        







