// Responsive navigation menu: Add class responsive to navigation menu
function addResponsiveClass() {
    let nav = document.getElementById("navMenu");
    let barsIcon = document.getElementById("barsIcon");

    if(nav.classList.contains("responsive")){
        nav.classList.remove("responsive");
    } else {
        nav.classList.add("responsive");
    }
}

function removeResponsiveClass(){
    document.getElementById("navMenu").classList.remove("responsive");
    document.getElementById("barsIcon").style.display = "block";
}