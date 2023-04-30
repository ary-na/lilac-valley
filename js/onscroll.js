window.onscroll = function () {

    let backToTop = document.getElementById("backToTop");
    // console.clear();
    // console.log("Win Y:" + window.scrollY);
    if (window.scrollY === 0) {
        backToTop.style.display = "none";
    } else {
        backToTop.style.display = "block";
    }
}