if (window.innerHeight < 500 && !(window.matchMedia("(orientation: portrait)").matches)) {
    window.location.replace("/error/screen-size/index.html?prevUrl=" + encodeURIComponent(window.location.href));
}

window.addEventListener("resize", function() {
    if (window.innerHeight < 500 && !(window.matchMedia("(orientation: portrait)").matches)) {
        window.location.replace("/error/screen-size/index.html?prevUrl=" + encodeURIComponent(window.location.href));
    }
});

window.onload = function() {
    setTimeout(function() {
        document.querySelector(".loading-icon").classList.add('transition-out')
    }, 100)
}