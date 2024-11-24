function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

  
    body.classList.toggle("dark-mode");


    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
}


let menu = document.getElementById("menu-icon");
let navList = document.querySelector(".navList");

menu.onclick = () =>{
   menu.classList.toggle("bx-x");
   menu.classList.toggle("bx-x");
   navList.classList.toggle("open");

}
 
















