// Responsive navigation menu: Add class responsive to navigation menu
function addResponsiveClass() {
    let nav = document.getElementById("navMenu");
    let barsIcon = document.getElementById("barsIcon");
    let closeIcon = document.getElementById("closeIcon");

    if(nav.classList.contains("responsive")){
        nav.classList.remove("responsive");
        barsIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        nav.classList.add("responsive");
        barsIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

function removeResponsiveClass(){
    document.getElementById("navMenu").classList.remove("responsive");
    document.getElementById("barsIcon").style.display = "block";
    document.getElementById("closeIcon").style.display = "none";
}